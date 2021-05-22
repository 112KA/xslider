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
    let diff;
    if (this.state.option.direction === 'vertical') {
      diff = (e.clientY - e.clientY0) / this.state.get('height');
    } else {
      diff = (e.clientX - e.clientX0) / this.state.get('width');
    }
    const { indexer } = this.services;
    indexer.move(-diff);
    this.state.set({ isDrag: true });
  }

  end() {
    const { indexer, touch } = this.services;
    indexer.up();
    touch.move('off');
    this.state.set({ isDrag: false });
  }
}
