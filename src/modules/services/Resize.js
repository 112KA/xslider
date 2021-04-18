import { EventDispatcher } from '../core/EventDispatcher';

export class Resize extends EventDispatcher {
  constructor(state, view) {
    super();
    this.state = state;
    this.view = view;

    this._bindMethods(['_onResize']);
  }

  setup() {
    this.observer = new ResizeObserver(this._onResize);
    this.observer.observe(this.view.dom.container);
  }

  dispose() {
    this.observer.disconnect();
  }

  _onResize() {
    this.dispatch('resize');
  }
}
