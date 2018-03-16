import {Event, TouchEvent} from '../core/Event'
import {InteractiveObject} from '../core/InteractiveObject'
import {env} from '../core/Environment'
import {Ticker} from './Ticker'

class Stage extends InteractiveObject {

	constructor() {
		super();

		this.ticker = new Ticker();

		this.set({target:window});
	}

	ready() {
		return new Promise((resolve,reject) => {

			const loaded = () => {
			    document.removeEventListener('DOMContentLoaded', loaded), 
			    window.removeEventListener('load', loaded);

			    resolve();
			};

			if(document.readyState === 'complete') {
				resolve();
			}
			else {
				document.addEventListener('DOMContentLoaded', loaded), 
				window.addEventListener('load', loaded);
			}
		})
	}

	get width() {
		return (window.innerWidth || document.documentElement.clientWidth || 0);
	}

	get height() {
		return (window.innerHeight || document.documentElement.clientHeight || 0);
	}

	_autoAddListener(target, type) {

		if(!target) return;

		super._autoAddListener(target, type);

		if(this._listeners[type].length == 1) {
			switch(type) {
				case 'tick':
					this.ticker.on(type, this._on.bubble);
					this.ticker.start();
					break;
				case 'resize':
					target.addEventListener(type, this._on.bubble);
					break;
			}
		}
	}

	_autoRemoveListener(target, type) {

		if(!target) return;

		super._autoRemoveListener(target, type);

		if(!this._listeners[type] || this._listeners[type].length == 0) {
			switch(type) {
				case 'tick':
					this.ticker.off(type, this._on.bubble);
					this.ticker.stop();
					break;
				case 'resize':
					target.removeEventListener(type, this._on.bubble);
					break;
			}
		}
	}
		
}

//singleton
export const stage = new Stage;

