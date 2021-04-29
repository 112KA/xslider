import { InteractiveObject } from '../core/InteractiveObject';

import { net } from '../components/Net';
import { cloner } from '../components/converter/Cloner';
import { Inliner } from '../components/converter/Inliner';
import { converter } from '../components/converter/SvgConverter';
// import {Bench} from '../components/debug/Bench'
import { Option } from '../domain/Option';

export class Page {
  constructor(page, debug) {
    this.element = page;
    // this.debug = debug;
    this.canvas = document.createElement('canvas');
    this.image = new Image();
    this.layer = {
      gl: page.querySelector('.xslider-layer-gl'),
      ui: page.querySelector('.xslider-layer-ui'),
    };

    // if (this.debug == Option.Debug.DISPLAY.IMG) {
    //   this.element.insertBefore(this.image, this.layer.gl);
    // }

    // this.element.insertBefore(this.canvas, this.layer.gl);

    this.inlinedNode = undefined;
    this.needsResize = false;
  }

  dispose() {
    this.layer.gl && this.layer.gl.classList.remove('xslider-capture');
  }

  async ready() {
    if (!this.isReadied && this.hasTexture) {
      this.inlinedNode = await Inliner.inlineNode(this.layer.gl);

      // // Utils.toSvg(this.layer.gl)
      // const svg = await converter.from(this.layer.gl)
      // this.svg = svg;
      // this.layer.gl.classList.remove("xslider-capture");
      // this.needsResize = true;
      // // document.querySelector('#xslider').appendChild(this.svg.documentElement.cloneNode(true));
    }
  }

  async _loadSvg(w, h) {
    this.svg = converter.convert(this.inlinedNode, w, h);

    let string = new XMLSerializer().serializeToString(this.svg);
    // console.log('string', string);
    // string = string.replace(/#/g, '%23').replace(/\n/g, '%0A')
    const uri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(string);

    // if (this.debug == Option.Debug.DISPLAY.SVG) {
    // if (this._svg0 === undefined) {
    //   this._svg0 = this.element.insertBefore(this.svg.childNodes[0], this.layer.gl);
    // } else {
    //   const node = this.svg.childNodes[0];
    //   this.element.replaceChild(node, this._svg0);
    //   this._svg0 = node;
    // }
    // }
    await net.loadImage(this.image, uri);
  }

  async resize(w, h) {
    if (this.hasTexture) {
      if (this.needsResize) {
        this.needsResize = false;

        this.canvas.width = w;
        this.canvas.height = h;
        this.layer.gl.classList.add('xslider-capture');

        cloner.cloneStyle(this.layer.gl, this.inlinedNode, Page.EXCLUDES);

        this.layer.gl.classList.remove('xslider-capture');

        await this._loadSvg(w, h);

        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(this.image, 0, 0, w, h);
      }
    }
  }

  /**
   * 準備ができたかどうか
   */
  get isReadied() {
    return this.inlinedNode !== undefined;
  }

  /**
   * textureありかどうか
   */
  get hasTexture() {
    return this.layer.gl !== undefined;
  }

  set active(v) {
    const method = v ? 'add' : 'remove';
    this.element.classList[method]('xslider-page-active');
  }
}

Page.EXCLUDES = ['background', 'left', 'right', 'width', 'height'];

export class Slide extends InteractiveObject {
  constructor() {
    super();

    this.list = [];
    this.width = this.height = undefined;

    this._bindMethods(['_onChangePage']);
  }

  setup(dom, mesh) {
    this.set({ target: dom.list });

    dom.pages.forEach(element => {
      this.list.push(new Page(element));
    });

    this.mesh = mesh;
    this.mesh && (this.uniforms = this.mesh.material.uniforms);

    this.on('page0', this._onChangePage);
    this.on('page1', this._onChangePage);
  }

  async ready(i0, i1) {
    const page0 = this.list[i0];
    let page1 = undefined;

    const arr = [page0.ready()];

    if (i1 !== undefined) {
      page1 = this.list[i1];
      arr.push(page1.ready());
    }

    await Promise.all(arr);

    this.set({ page0, page1 });
  }

  dispose() {
    this.list.forEach(page => {
      page.dispose();
    });

    this.off('page0', this._onChangePage);
    this.off('page1', this._onChangePage);

    const page0 = this.get('page0');
    const page1 = this.get('page1');
    page0.active = false;
    page1 && (page1.active = false);
  }

  async resize(w, h) {
    this.width = w;
    this.height = h;

    if (this.mesh) {
      this.uniforms.resolution.value.set(w, h);
    }

    this.list.forEach(page => {
      page.needsResize = true;
    });

    await Promise.all([this._updatePage(0), this._updatePage(1)]);
  }

  _onChangePage(e) {
    let removeOld = false;

    switch (e.type) {
      case 'page0':
        this._updatePage(0);
        removeOld = e.value0 !== undefined;
        break;
      case 'page1':
        this._updatePage(1);
        removeOld = e.value0 !== undefined && e.value0 !== this.get('page0');
        break;
    }

    if (removeOld) {
      e.value0.active = false;
    }
  }

  async _updatePage(pageIndex) {
    if (this.width === undefined && this.height === undefined) return;

    const page = this.get('page' + pageIndex);

    if (page) {
      page.active = true;

      await page.resize(this.width, this.height);
    }

    if (this.uniforms) {
      const texture = this.uniforms['texture' + pageIndex].value;
      texture.image = page ? page.canvas : undefined;
      texture.needsUpdate = true;
    }
  }
}
