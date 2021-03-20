import { EventDispatcher } from '../core/EventDispatcher';
import { stage } from '../core/Stage';

export class AutoPlay extends EventDispatcher {
  constructor() {
    super();

    this._bindMethods(['_onTick']);
  }

  get enabled() {
    return this.option != undefined;
  }

  setup(option) {
    this.option = option;
  }

  start() {
    if (this.enabled) {
      stage.on('tick', this._onTick);
    }
  }

  stop() {
    if (this.enabled) {
      stage.off('tick', this._onTick);
    }
  }

  _onTick(e) {
    if (e.time > this.option.delay) {
      this.dispatch(AutoPlay.EVENT.TICK);
    }
  }
}

AutoPlay.EVENT = {
  TICK: 'autoplay_tick',
};
