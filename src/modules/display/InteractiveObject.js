import {env} from '../core/Environment'
import {Event, TouchEvent} from '../core/Event'
import {EventDispatcher} from '../core/EventDispatcher'

export class InteractiveObject extends EventDispatcher {

	constructor() {
		super();

		this._defineHandlers();

		this.on('target', this._handler.changeTarget);
	}

	_defineHandlers() {

		this._handler = {
			changeTarget : (o) => {
				if(o.value0) {
					for(let type in this._listeners) {
						this._autoRemoveListener(o.value0, type);
					}
				}
				this.off();
			},

			touch : (e) => {

				if(env.support.touch) {
					let touch = e.touches[0]
					if(touch) {
						e.clientX = touch.clientX;
						e.clientY = touch.clientY;
					}
					else {
						e.clientX = this.clientX0;
						e.clientY = this.clientY0;
					}
				}

				if(!this.clientX0) {
					this.clientX0 = e.clientX;
					this.clientY0 = e.clientY;
				}

				e.clientX0 = this.clientX0;
				e.clientY0 = this.clientY0;

				this.clientX0 = e.clientX;
				this.clientY0 = e.clientY;

				this.dispatch(e.type, e);
			},

			touchStart : (e) => {
				this.clientX0 = this.clientY0 = undefined;
			}
		}
	}

	dispose() {
		this.off();
	}

	on(type, listener, options) {

		super.on(type, listener, options);

		const target = this.get('target');
		this._autoAddListener(target, type);
		
		return this;
	}

	off(type, listener) {

		super.off(type, listener);

		const target = this.get('target');
		this._autoRemoveListener(target, type);
		
		return this;
	}

	_autoAddListener(target, type) {

		if(!target) return;

		if(this._listeners[type].length == 1) {
			switch(type) {
				case TouchEvent.START:
				case TouchEvent.MOVE:
				case TouchEvent.END:
					target.addEventListener(type, this._handler.touch);
					break;
			}

			if(type == TouchEvent.MOVE) {
				target.addEventListener(TouchEvent.START, this._handler.touchStart);
			}
		}
	}

	_autoRemoveListener(target, type) {

		if(!target) return;

		if(!this._listeners[type] || this._listeners[type].length == 0) {
			switch(type) {
				case TouchEvent.START:
				case TouchEvent.MOVE:
				case TouchEvent.END:
					target.removeEventListener(type, this._handler.touch);
					break;
			}

			if(type == TouchEvent.MOVE) {
				target.removeEventListener(TouchEvent.START, this._handler.touchStart);
			}
		}
	}
}