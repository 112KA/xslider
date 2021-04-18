import { TouchEvent } from '../core/Event';
import { EventDispatcher } from '../core/EventDispatcher';
import { stage } from '../core/Stage';

export class Touch extends EventDispatcher {
  constructor(state, view) {
    super();
    this.state = state;
    this.view = view;
  }

  get enabled() {
    return this.state.option.get('touchMove');
  }

  start(flag) {
    if (this.enabled) {
      this.view.slide[flag](TouchEvent.START, this._onBubble);
    }
  }

  move(flag) {
    stage[flag](TouchEvent.MOVE, this._onBubble);
    stage[flag](TouchEvent.END, this._onBubble);
    this.state.set({ isDrag: flag === 'on' });
  }
}
