import { Option } from '../domain/Option';

export class Dom {
  get width() {
    return this.container.clientWidth;
  }

  get height() {
    return this.container.clientHeight;
  }

  setup(selector, option) {
    this.container = document.querySelector(selector);
    this.container.classList.add('xslider-container');

    this.list = this.container.querySelector('.xslider-slide');
    this.pages = this.list.querySelectorAll('.xslider-page');

    this.pager = this.container.querySelector('.xslider-pager');
    this.prev = this.container.querySelector('.xslider-prev');
    this.next = this.container.querySelector('.xslider-next');

    this.canvas = document.createElement('canvas');
    this.container.insertBefore(this.canvas, this.list);

    if (option.direction === 'vertical') {
      this.container.classList.add('xslider-vertical');
    }

    if (option.debug === Option.Debug.DISPLAY.DOM) {
      this.container.classList.add('xslider-debug');
    }
  }

  dispose() {
    this.container.classList.remove('xslider-container', 'xslider-vertical', 'xslider-debug');
    this.container.removeChild(this.canvas);
  }

  set slideTouchDisabled(v) {
    const method = v ? 'add' : 'remove';
    this.list.classList[method]('xslider-disabled');
  }
}
