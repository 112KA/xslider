import { EventDispatcher } from '../core/EventDispatcher';
import { stage } from '../core/Stage';

export class AutoPlay extends EventDispatcher {
  constructor() {
    super();

    this._defineHandlers();
  }

  _defineHandlers() {
    this._on = {
      tick: e => {
        if (e.time > this.option.delay) {
          this.dispatch(AutoPlay.EVENT.TICK);
        }
      },
    };
  }

  get enabled() {
    return this.option != undefined;
  }

  setup(option) {
    this.option = option;
  }

  start() {
    if (this.enabled) {
      stage.on('tick', this._on.tick);
    }
  }

  stop() {
    if (this.enabled) {
      stage.off('tick', this._on.tick);
    }
  }
}

AutoPlay.EVENT = {
  TICK: 'autoplay_tick',
};
