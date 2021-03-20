import { net } from '../components/Net';
import { cloner } from '../components/converter/Cloner';
import { Inliner } from '../components/converter/Inliner';
import { converter } from '../components/converter/SvgConverter';
// import {Bench} from '../components/debug/Bench'
import { Option } from '../components/Option';

import { EventDispatcher } from '../core/EventDispatcher';

export class Slide {
  constructor(slide, debug) {
    this.element = slide;
    this.debug = debug;
    this.canvas = document.createElement('canvas');
    this.image = new Image();
    this.layer = {
      gl: slide.querySelector('.xslider-layer-gl'),
      ui: slide.querySelector('.xslider-layer-ui'),
    };

    if (this.debug == Option.Debug.DISPLAY.IMG) {
      this.element.insertBefore(this.image, this.layer.gl);
    }

    // this.element.insertBefore(this.canvas, this.layer.gl);

    this.inlinedNode = undefined;
    this.needsResize = false;
  }

  dispose() {
    this.layer.gl && this.layer.gl.classList.remove('xslider-capture');
  }

  ready() {
    return new Promise((resolve, reject) => {
      //処理済
      if (this.inlinedNode) {
        resolve();
      }
      //textureなし
      else if (!this.layer.gl) {
        resolve();
      } else {
        Inliner.inlineNode(this.layer.gl).then(inlined => {
          this.inlinedNode = inlined;

          resolve();
        });

        // // Utils.toSvg(this.layer.gl)
        // converter.from(this.layer.gl)
        // 	.then((svg) => {
        // 		this.svg = svg;
        // 		this.layer.gl.classList.remove("xslider-capture");
        // 		this.needsResize = true;
        // 		// document.querySelector('#xslider').appendChild(this.svg.documentElement.cloneNode(true));
        // 		resolve();
        // 	});
      }
    });
  }

  loadSvg(w, h) {
    this.svg = converter.convert(this.inlinedNode, w, h);

    let string = new XMLSerializer().serializeToString(this.svg);
    // console.log('string', string)
    // string = string.replace(/#/g, '%23').replace(/\n/g, '%0A')
    const uri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(string);

    if (this.debug == Option.Debug.DISPLAY.SVG) {
      if (this._svg0 === undefined) {
        this._svg0 = this.element.insertBefore(this.svg.childNodes[0], this.layer.gl);
      } else {
        const node = this.svg.childNodes[0];
        this.element.replaceChild(node, this._svg0);
        this._svg0 = node;
      }
    }
    return net.loadImage(this.image, uri);
  }

  resize(w, h) {
    return new Promise((resolve, reject) => {
      if (!this.needsResize) {
        resolve();
      } else {
        this.needsResize = false;

        this.canvas.width = w;
        this.canvas.height = h;

        if (this.layer.gl) {
          this.layer.gl.classList.add('xslider-capture');

          cloner.cloneStyle(this.layer.gl, this.inlinedNode, Slide.EXCLUDES);

          this.layer.gl.classList.remove('xslider-capture');

          this.loadSvg(w, h).then(() => {
            const c = this.canvas.getContext('2d');
            c.clearRect(0, 0, w, h);
            c.drawImage(this.image, 0, 0, w, h);
            // console.log(this.image, w, h);

            resolve();
          });
        } else {
          resolve();
        }
      }
    });
  }
}

Slide.EXCLUDES = ['background', 'left', 'right', 'width', 'height'];

export class SlideContainer extends EventDispatcher {
  constructor() {
    super();

    this._bindMethods(['_onChangeSlide']);

    this.width = this.height = -1;
  }

  ready(indexer) {
    const slide0 = indexer.data.list[indexer.i0];
    let slide1 = undefined;

    const arr = [slide0.ready()];

    if (indexer.i1 !== undefined) {
      slide1 = indexer.data.list[indexer.i1];
      arr.push(slide1.ready());
    }

    return Promise.all(arr).then(() => {
      this.set({ slide0: slide0, slide1: slide1 });
    });
  }

  setup(mesh) {
    this.mesh = mesh;
    if (this.mesh) {
      this.uniforms = this.mesh.material.uniforms;
    }

    this.on('slide0', this._onChangeSlide);
    this.on('slide1', this._onChangeSlide);
  }

  dispose() {
    this.off('slide0', this._onChangeSlide);
    this.off('slide1', this._onChangeSlide);

    const slide0 = this.get('slide0');
    const slide1 = this.get('slide1');
    slide0.element.classList.remove('xslider-slide-active');
    slide1 && slide1.element.classList.remove('xslider-slide-active');
  }

  resize(w, h) {
    this.width = w;
    this.height = h;

    if (this.mesh) {
      this.uniforms.resolution.value.set(w, h);
    }

    return Promise.all([this.updateSlide(0), this.updateSlide(1)]);
  }

  updateSlide(slideIndex) {
    if (this.width == -1 && this.height == -1) return;

    const slide = this.get('slide' + slideIndex);

    return new Promise((resolve, reject) => {
      // console.log(this.uniforms);
      // console.log(this.uniforms.texture0.value.image);
      // console.log(this.uniforms.texture1.value.image);
      // console.log(slide);
      // console.log(slideIndex, this.uniforms.texture0.value.image == this.uniforms.texture1.value.image);

      if (!slide) {
        if (this.uniforms) {
          const texture = this.uniforms['texture' + slideIndex].value;
          texture.image = undefined;
          texture.needsUpdate = true;
        }
        resolve();
      }

      slide.element.classList.add('xslider-slide-active');

      slide.resize(this.width, this.height).then(() => {
        if (this.uniforms) {
          const texture = this.uniforms['texture' + slideIndex].value;
          texture.image = slide.canvas;
          texture.needsUpdate = true;
        }

        resolve();
      });
    });
  }

  _onChangeSlide(e) {
    // console.log(e);

    let removeOld = false;

    switch (e.type) {
      case 'slide0':
        this.updateSlide(0);
        removeOld = e.value0 !== undefined;
        break;
      case 'slide1':
        this.updateSlide(1);
        removeOld = e.value0 !== undefined && e.value0 !== this.get('slide0');
        break;
    }

    if (removeOld) {
      e.value0.element.classList.remove('xslider-slide-active');
    }
  }
}
