import {EventDispatcher} from '../core/EventDispatcher';

export const Ticker = class extends EventDispatcher {
	constructor() {
		super();

		this.fps = 30;
		// console.log('this._fps: ', this._fps);

		this._defineFunctions();
	}

	_defineFunctions() {

		const prefixes = ["ms","moz","webkit","o"];
		let i = prefixes.length;

		while (--i > -1 && !window.requestAnimationFrame) {
			window.requestAnimationFrame = window[prefixes[i] + "RequestAnimationFrame"];
			window.cancelAnimationFrame = window[prefixes[i] + "CancelAnimationFrame"] || window[prefixes[i] + "CancelRequestAnimationFrame"];
		}
			// console.log('this._RAF: ', this._RAF);


		this._tickHandler = () => {
			this._requestId = window.requestAnimationFrame(this._tickHandler);

			this._lastMs = this.time;

			let overlap = this._lastMs - this._nextMs;

			if(overlap >= 0) {
				this._nextMs += overlap + (overlap >= this._gap ? 1 : this._gap - overlap);
				this.dispatch('tick', {time:this._lastMs - this._startMs});
			}
		}
	}

	get fps() {
		return this._fps;
	}

	set fps(v) {
		this._fps = v;
		this._gap = 1 / (v || 60) * 1000;
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

export const TweenMaxTicker = class extends Ticker {
	constructor() {
		super();
	}

	setFps() {
		
	}

	start() {

	}

	stop() {

	}
}