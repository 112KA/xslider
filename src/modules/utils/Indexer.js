import {EventDispatcher} from '../core/EventDispatcher'

export class Indexer extends EventDispatcher {
	constructor() {
		super();

		this._down = false;
		this._throw = false;
	}

	setup(data) {
		this._target = data.option.initialSlideIndex;
		this._v = this._target-1;
		this._length = data.dom.slides.length;

		this.progress = 0;

		this.tick();
	}

	prev() {
		this._target--;
	}

	next() {
		this._target++;
	}

	to(index) {
		let d0 = index - this.current, d1, diff;

		if(d0 > 0) {
			d1 = d0 - this._length;
			diff = d0 > -d1 ? d1 : d0;
		}
		else {
			d1 = d0 + this._length;
			diff = -d0 > d1 ? d1 : d0;
		}

		this._target += diff;
	}

	down() {
		this._down = true;
		this._throw = false;
		this._move = 0;
	}

	move(v) {
		this._v+=v;
		this._move = v;
	}

	up() {
		this._down = false;
		this._throw = true;
	}

	get current() {
		const v = this._target % this._length + this._length;
		return Math.round(v) % this._length;
	}

	get i0() {
		return this._i0;
	}

	get i1() {
		return this._i1;
	}

	tick() {

		let complete = false;

		if(this._down) {
			this._target = this._v;
		}
		else if(this._throw) {
			this._target += this._move;
			this._move *= 0.95;
			this._v = this._target;

			if(Math.abs(this._move) < 0.01) {
				this._target = Math.round(this._v);
				this._throw = false;
			}
		}
		else {
			this._v += (this._target - this._v) * Indexer.EASING;

			if(Math.abs(this._target - this._v) < 0.001) {
				this._v = this._target;
				complete = true;
			}
		}

		const v = this._v % this._length + this._length;
		this.progress = v % 1;
		this._i0 = Math.floor(v) % this._length;
		this._i1 = Math.ceil(v) % this._length;

		if(complete) {
			this.dispatch('complete');
		}

	}
}

Indexer.EASING = 0.15;