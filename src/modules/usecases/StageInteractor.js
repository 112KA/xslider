import { EventDispatcher } from '../core/EventDispatcher';
import { Inliner } from '../components/converter/Inliner';

export class StageInteractor extends EventDispatcher {
  constructor(state, services) {
    super();
    this.state = state;
    this.services = services;

    this._bindMethods(['tick']);
  }

  async ready() {
    const { ticker, autoplay, listeners } = this.services;
    try {
      await Inliner.resolveFonts();

      // autoplay.start();
      ticker.start();

      listeners.touchStart.add();
    } catch (err) {
      console.warn('first ready rejected : ', err);
    }
  }

  dispose() {
    const { ticker, autoplay, listeners } = this.services;
    ticker.stop();
    autoplay.stop();

    listeners.touchStart.remove();
  }

  tick(e) {
    const { indexer } = this.services;
    indexer.tick();

    const { i0, i1, progress, current, head, tail } = indexer;
    this.state.set({
      i0,
      i1,
      progress,
      index: current,
      time: e.time,
      head,
      tail,
    });
  }

  resize() {}
}
