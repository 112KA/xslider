import { EventDispatcher } from '../core/EventDispatcher';

export class Ticker extends EventDispatcher {
  constructor() {
    super();

    this.fps = 30;

    const prefixes = ['ms', 'moz', 'webkit', 'o'];
    let i = prefixes.length;

    while (--i > -1 && !window.requestAnimationFrame) {
      window.requestAnimationFrame = window[prefixes[i] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame =
        window[prefixes[i] + 'CancelAnimationFrame'] ||
        window[prefixes[i] + 'CancelRequestAnimationFrame'];
    }

    this._bindMethods(['_tickHandler']);
  }

  _tickHandler() {
    this._requestId = window.requestAnimationFrame(this._tickHandler);

    this._lastMs = this.time;

    let overlap = this._lastMs - this._nextMs;

    if (overlap >= 0) {
      const t0 = this._nextMs;
      this._nextMs += overlap + (overlap >= this._gap ? 1 : this._gap - overlap);
      this.dispatch('tick', {
        type: 'tick',
        time: this._lastMs - this._startMs,
        dt: this._nextMs - t0,
      });
    }
  }

  get fps() {
    return this._fps;
  }

  set fps(v) {
    this._fps = v;
    this._gap = (1 / (v || 60)) * 1000;
  }

  get time() {
    return Date.now() || new Date().getTime();
  }

  start() {
    this._startMs = this.time;
    this._nextMs = this._startMs + this._gap;
    this._requestId = window.requestAnimationFrame(this._tickHandler);
  }

  stop() {
    window.cancelAnimationFrame(this._requestId);
  }
}
