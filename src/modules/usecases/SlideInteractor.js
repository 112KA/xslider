import { EventDispatcher } from '../core/EventDispatcher';

export class SlideInteractor extends EventDispatcher {
  constructor(state, services) {
    super();

    this.state = state;
    this.services = services;

    this._bindMethods(['index', 'next', 'prev', 'complete']);
  }

  index(e) {
    const { indexer, ticker } = this.services;
    indexer.to(e.value);
    ticker.start();
  }

  next(e) {
    e.preventDefault && e.preventDefault();

    const { indexer, ticker, autoplay, listeners } = this.services;
    listeners.touchStart.remove();
    indexer.next();
    ticker.start();
    autoplay.stop();
  }

  prev(e) {
    e.preventDefault && e.preventDefault();

    const { indexer, ticker, autoplay, listeners } = this.services;
    listeners.touchStart.remove();
    indexer.prev();
    ticker.start();
    autoplay.stop();
  }

  complete() {
    const { ticker, autoplay, listeners } = this.services;
    listeners.touchStart.add();
    autoplay.start();
    ticker.stop();
  }
}
