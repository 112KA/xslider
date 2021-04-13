import { EventDispatcher } from '../core/EventDispatcher';

export class Pager extends EventDispatcher {
  constructor() {
    super();

    this._bindMethods(['_onClick', '_onChangeIndex']);
  }

  setup(dom) {
    this.element = dom.pager;
    this.list = [];

    const length = dom.pages.length;

    for (let i = 0; i < length; i++) {
      let span = document.createElement('span');
      this.element.appendChild(span);

      span.addEventListener('click', this._onClick);
      this.list.push(span);
    }

    this.on('index', this._onChangeIndex);
  }

  dispose() {
    this.off('index', this._onChangeIndex);
    this.set({ index: undefined });

    this.list.forEach(span => {
      span.removeEventListener('click', this._onClick);
      this.element.removeChild(span);
    });
  }

  _onClick(e) {
    const index = this.list.indexOf(e.target);
    this.set({ index });
  }

  _onChangeIndex(e) {
    this.index = e.value;
  }

  set index(value) {
    this.list.forEach(span => span.classList.remove('xslider-active'));
    this.list[value].classList.add('xslider-active');
  }
}
