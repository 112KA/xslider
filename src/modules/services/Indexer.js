import { EventDispatcher } from '../core/EventDispatcher';
import { clamp } from '../components/Utils';

export class Indexer extends EventDispatcher {
  constructor(state) {
    super();

    this.state = state;
  }
  setup() {
    this._target = this.state.option.initialSlideIndex;
    this._v = this._target - 1;
    this._numPages = this.state.get('numPages');

    this._state = Indexer.STATE.DEFAULT;

    this.progress = 0;

    this.head = false;
    this.tail = false;

    !this.state.option.loop && (this._target = this.constrain(this._target));

    // this.tick();

    const v = (this._v % this._numPages) + this._numPages;
    this._i0 = Math.floor(v) % this._numPages;
    this._i1 = this._target;
  }

  prev() {
    this._target--;

    !this.state.option.loop && (this._target = this.constrain(this._target));
  }

  next() {
    this._target++;

    !this.state.option.loop && (this._target = this.constrain(this._target));
  }

  to(index) {
    if (this.state.option.loop) {
      let d0 = index - this.current,
        d1,
        diff;

      if (d0 > 0) {
        d1 = d0 - this._numPages;
        diff = d0 > -d1 ? d1 : d0;
      } else {
        d1 = d0 + this._numPages;
        diff = -d0 > d1 ? d1 : d0;
      }

      this._target += diff;
    } else {
      this._target = index;
    }
  }

  down() {
    this._state = Indexer.STATE.DOWN;
    this._move = 0;
  }

  move(v) {
    this._v += v;
    this._move = v;

    !this.state.option.loop && (this._v = this.constrain(this._v));

    this._target = this._v;
  }

  up() {
    this._state = Indexer.STATE.UP;

    !this.state.option.get('throwable', 'touchMove') && (this._move = 0);
  }

  get current() {
    const v = (this._target % this._numPages) + this._numPages;
    return Math.round(v) % this._numPages;
  }

  get i0() {
    return this._i0;
  }

  get i1() {
    return this._i1;
  }

  constrain(v) {
    const ret = clamp(v, 0, this._numPages - 1);
    this.head = ret === 0;
    this.tail = ret === this._numPages - 1;
    return ret;
  }

  tick() {
    let complete = false;

    switch (this._state) {
      case Indexer.STATE.DOWN:
        break;

      case Indexer.STATE.UP:
        this._target += this._move;

        !this.state.option.loop && (this._target = this.constrain(this._target));

        this._move *= 0.95;
        this._v = this._target;

        if (Math.abs(this._move) < 0.01) {
          this._target = Math.round(this._v);
          this._state = Indexer.STATE.DEFAULT;
        }
        break;

      default:
        !this.state.option.loop && (this._target = this.constrain(this._target));

        this._v += (this._target - this._v) * this.state.option.easing;

        if (Math.abs(this._target - this._v) < 0.001) {
          this._v = this._target;
          complete = true;
        }
        break;
    }

    const v = (this._v % this._numPages) + this._numPages;
    this.progress = v % 1;
    this._i0 = Math.floor(v) % this._numPages;
    const i1 = Math.ceil(v) % this._numPages;
    this._i1 = this._i0 !== i1 ? i1 : undefined;

    complete && this.dispatch('complete');
  }
}

Indexer.STATE = {
  DEFAULT: 'DEFAULT',
  DOWN: 'DOWN',
  UP: 'UP',
};
