import { stage } from '../core/Stage';
import { EventDispatcher } from '../core/EventDispatcher';

export class Tick extends EventDispatcher {
  constructor(state) {
    super();
    this.state = state;

    this._bindMethods(['_onTick']);
  }

  setup(indexer) {
    this.indexer = indexer;
  }

  start() {
    stage.on('tick', this._onTick);
  }

  stop() {
    stage.off('tick', this._onTick);
  }

  _onTick(e) {
    this.indexer.tick();

    const { i0, i1, progress, current, head, tail } = this.indexer;
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
}
