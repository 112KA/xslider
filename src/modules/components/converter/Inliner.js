import { cloner } from './Cloner';
import { net } from '../Net';

export const Inliner = {
  URL_REGEX: /url\(['"]?([^'"]+?)['"]?\)/g,

  resolveFonts() {
    return new Promise((resolve, reject) => {
      if (this.inlinedFontString) {
        resolve();
      } else {
        const fontStrings = this.readFontRules().map(rule => rule.cssText);
        this.inlineFonts(fontStrings).then(inlinedFontStrings => {
          this.inlinedFontString = inlinedFontStrings.join(' ');
          // this.inlinedFontString = inlinedFontStrings.join("\n");
          // console.log("this.inlinedFontString", this.inlinedFontString)
          resolve();
        });
      }
    });
  },

  readFontRules() {
    const fontRules = [];

    const list = document.styleSheets;

    for (let j = 0; j < list.length; j++) {
      let ss = list[j];

      if (ss.cssRules) {
        for (let i = 0; i < ss.cssRules.length; i++) {
          let rule = ss.cssRules[i];
          if (rule.type === CSSRule.FONT_FACE_RULE) {
            fontRules.push(rule);
          }
        }
      }
    }

    // console.log("fontRules", fontRules)

    return fontRules;
  },

  inlineFonts(fontStrings) {
    const arr = fontStrings.map(string => this._inline(string));
    return Promise.all(arr);
  },

  inlineNode(node) {
    return cloner.cloneNode(node).then(this.inlineImage.bind(this));
  },

  _inline(string) {
    // console.log('string', string)
    const urls = this.searchUrls(string);
    const arr = [];

    urls.map(url => {
      const p = net.getDataURI(url).then(dataURI => {
        string = string.replace(url, dataURI);
      });
      arr.push(p);
    });

    return Promise.all(arr).then(() => string);
  },

  searchUrls(string) {
    const result = [];
    let match;
    while ((match = this.URL_REGEX.exec(string)) !== null) {
      result.push(match[1]);
    }
    return result.filter(url => {
      return this.isDataURI(url);
    });
  },

  inlineImage(node) {
    return new Promise((resolve, reject) => {
      Promise.resolve(node)
        .then(this.inlineImageElement.bind(this))
        .then(this.inlineBackgroundImage.bind(this))
        .then(() => {
          if (node.hasChildNodes()) {
            const children = node.childNodes;
            const arr = [];

            children.forEach((child, i, list) => {
              let p = this.inlineImage(child);
              arr.push(p);
            });

            Promise.all(arr).then(() => {
              resolve(node);
            });
          } else {
            resolve(node);
          }
        });
    });
  },

  inlineImageElement: function (node) {
    if (!(node instanceof HTMLImageElement)) return node;

    if (this.isDataURI(node.src)) return node;

    // return node;

    return new Promise((resolve, reject) => {
      net.getDataURI(node.src).then(dataURI => {
        node.onload = () => {
          resolve(node);
        };
        node.onerror = reject;
        node.src = dataURI;
      });
    });
  },

  inlineBackgroundImage(node) {
    if (!(node instanceof Element)) return node;

    const background = node.style.getPropertyValue('background');
    if (!background) return node;

    return this._inline(background).then(inlined => {
      node.style.setProperty('background', inlined);
      return node;
    });
  },

  isDataURI(string) {
    return string.search(/^(data:)/) === -1;
  },
};
