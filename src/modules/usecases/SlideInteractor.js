import { EventDispatcher } from '../core/EventDispatcher';

export class SlideInteractor extends EventDispatcher {
  constructor(state, services) {
    super();

    this.state = state;
    this.services = services;

    this._bindMethods(['index', 'next', 'prev', 'complete']);
  }

  index(e) {
    const { autoplay, indexer, tick, touch } = this.services;
    tick.start();
    touch.start('off');
    autoplay.stop();
    indexer.to(e.value);
  }

  next(e) {
    e.preventDefault && e.preventDefault();

    const { autoplay, indexer, tick, touch } = this.services;
    tick.start();
    touch.start('off');
    autoplay.stop();
    indexer.next();
  }

  prev(e) {
    e.preventDefault && e.preventDefault();

    const { autoplay, indexer, tick, touch } = this.services;
    tick.start();
    touch.start('off');
    autoplay.stop();
    indexer.prev();
  }

  complete() {
    const { autoplay, tick, touch } = this.services;
    tick.stop();
    touch.start('on');
    autoplay.start();
  }
}
