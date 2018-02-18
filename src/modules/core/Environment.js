import {EventDispatcher} from './EventDispatcher'

class Environment extends EventDispatcher {
	constructor() {
		super();
	}

	get support() {
		return Environment.support;
	}
}

Environment.support = {
	touch : ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
	pointer : window.navigator.pointerEnabled,
	MSPointer : window.navigator.msPointerEnabled
};

export const env = new Environment();