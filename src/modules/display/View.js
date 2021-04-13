import { EventDispatcher } from '../core/EventDispatcher';
import { Button } from './Button';
import { Pager } from './Pager';
import { Slide, Page } from './Slide';
import { Dom } from './Dom';
import { DefaultRenderer } from '../renderer/DefaultRenderer';
// import {ThreeRenderer} from '../renderer/ThreeRenderer'
import { XRenderer } from '../renderer/XRenderer';

export class View extends EventDispatcher {
  constructor() {
    super();

    this.dom = new Dom();

    this.slide = new Slide();

    this.renderer = {
      default: new DefaultRenderer(),
      gl: undefined,
    };
  }

  setup(selector, option) {
    this.dom.setup(selector);

    if (this.dom.pager) {
      this.pager = this.pager || new Pager();
      this.pager.setup(this.dom);
    }

    if (this.dom.prev) {
      this.prev = this.prev || new Button();
      this.prev.setup(this.dom.prev);
    }

    if (this.dom.next) {
      this.next = this.next || new Button();
      this.next.setup(this.dom.next);
    }

    this.renderer.default.setup(option, this.slide);

    this.renderer.gl = this.selectRenderer(option);
    this.renderer.gl.setup(option, this.slide);

    this.slide.setup(this.dom, this.renderer.gl.mesh);
  }

  selectRenderer(option) {
    //TODO: ie fallback
    if (option.debug) {
      return new DefaultRenderer();
    } else {
      // return option.renderer || new ThreeRenderer(this.dom.canvas);
      return option.renderer || new XRenderer(this.dom.canvas);
    }
  }

  dispose() {
    if (this.pager) {
      this.pager.off('index', this._onBubble);
      this.pager.dispose();
    }

    if (this.prev) {
      this.prev.dispose();
    }

    if (this.next) {
      this.next.dispose();
    }

    this.slide.dispose();

    this.renderer.gl.dispose();
    this.renderer.default.dispose();

    this.dom.dispose();
  }

  async resize() {
    const w = this.dom.width,
      h = this.dom.height;

    this.dom.canvas.setAttribute('width', w);
    this.dom.canvas.setAttribute('height', h);

    this.renderer.default.resize(w, h);
    this.renderer.gl.resize(w, h);

    await this.slide.resize(w, h);
  }
}
