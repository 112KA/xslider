import { EventDispatcher } from '../core/EventDispatcher';

export class TouchInteractor extends EventDispatcher {
  constructor(state, services) {
    super();

    this.state = state;
    this.services = services;

    this._bindMethods(['start', 'move', 'end']);
  }

  start() {
    const { autoplay, indexer, tick, touch } = this.services;
    autoplay.stop();
    indexer.down();
    tick.start();
    touch.move('on');
  }

  move(e) {
    const dx = (e.clientX - e.clientX0) / this.state.get('width');
    const { indexer } = this.services;
    indexer.move(-dx);
  }

  end() {
    const { indexer, touch } = this.services;
    indexer.up();
    touch.move('off');
  }
}
