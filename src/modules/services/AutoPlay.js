import { Event } from '../core/Event';
import { EventDispatcher } from '../core/EventDispatcher';
import { stage } from '../core/Stage';

export class AutoPlay extends EventDispatcher {
  constructor(state) {
    super();
    this.state = state;

    this._bindMethods(['_onTick']);
  }

  get enabled() {
    return this.state.option.autoplay != undefined;
  }

  start() {
    this.enabled && stage.on('tick', this._onTick);
  }

  stop() {
    this.enabled && stage.off('tick', this._onTick);
  }

  _onTick(e) {
    if (e.time > this.state.option.autoplay.delay) {
      this.dispatch(Event.AUTOPLAY_NEXT);
    }
  }
}
