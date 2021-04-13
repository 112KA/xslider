import { EventDispatcher } from '../core/EventDispatcher';

export class IndexPresenter extends EventDispatcher {
  constructor(state, view) {
    super();
    this.state = state;
    this.view = view;

    this._bindMethods(['index', 'head', 'tail']);
  }

  async index() {
    const { pager, slide } = this.view,
      index = this.state.get('index');

    pager.index = index;
  }

  head() {
    const { prev } = this.view;
    prev && (prev.active = !this.state.get('head'));
  }

  tail() {
    const { next } = this.view;
    next && (next.active = !this.state.get('tail'));
  }
}
