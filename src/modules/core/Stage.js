import {Event, TouchEvent} from '../core/Event'
import {InteractiveObject} from '../display/InteractiveObject'
import {env} from '../core/Environment'
import {Ticker} from '../utils/Ticker'

class Stage extends InteractiveObject {

	constructor() {
		super();

		this.ticker = new Ticker();

		this.set({target:window});
	}

	_defineHandlers() {

		super._defineHandlers();

		this._handler.tick = (o) => {
			this.dispatch("tick", o);
		}

		this._handler.resize = (e) => {
			this.dispatch(e.type, e);
		}
	}

	ready() {
		return new Promise((resolve,reject) => {

			const loaded = () => {
				console.log('loaded: ');
			    document.removeEventListener('DOMContentLoaded', loaded), 
			    window.removeEventListener('load', loaded);

			    resolve();
			};

				console.log('document.readyState: ', document.readyState);
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
					this.ticker.on('tick', this._handler.tick);
					this.ticker.start();
					break;
				case 'resize':
					target.addEventListener(type, this._handler.resize);
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
					this.ticker.off('tick', this._handler.tick);
					this.ticker.stop();
					break;
				case 'resize':
					target.removeEventListener(type, this._handler.resize);
					break;
			}
		}
	}
		
}

//singleton
export const stage = new Stage;

