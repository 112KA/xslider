import { InteractiveObject } from '../core/InteractiveObject';
import { Button } from './Button';
import { Pager } from './Pager';

export class UI extends InteractiveObject {
  constructor() {
    super();

    this._bindMethods(['_onPrev', '_onNext']);
  }

  setup(data) {
    const dom = data.dom;

    this.set({ target: dom.view });

    if (dom.pager) {
      this.pager = this.pager || new Pager();
      this.pager.setup(data);
      this.pager.on('index', this._onBubble);
    }

    if (dom.prev) {
      this.prev = this.prev || new Button();
      this.prev.setup(dom.prev);
      this.prev.on('click', this._onPrev);
    }

    if (dom.next) {
      this.next = this.next || new Button();
      this.next.setup(dom.next);
      this.next.on('click', this._onNext);
    }
  }

  dispose() {
    if (this.pager) {
      this.pager.off('index', this._onBubble);
      this.pager.dispose();
    }

    if (this.prev) {
      this.prev.off('click', this._onPrev);
      this.prev.dispose();
    }

    if (this.next) {
      this.next.off('click', this._onNext);
      this.next.dispose();
    }
  }

  _onPrev(e) {
    e.preventDefault();
    this.dispatch(UI.EVENT.PREV);
  }

  _onNext(e) {
    e.preventDefault();
    this.dispatch(UI.EVENT.NEXT);
  }
}

UI.EVENT = {
  PREV: 'ui_prev',
  NEXT: 'ui_next',
};
