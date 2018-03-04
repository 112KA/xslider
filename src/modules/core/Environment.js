import {EventDispatcher} from './EventDispatcher'

class Environment extends EventDispatcher {
	constructor() {
		super();

		console.info("xslider ver.",XSLIDER_VERSION);
		if(!THREE) {
			console.error("xslider depend on three");
		}
		if(!domtoimage) {
			console.error("xslider depend on dom-to-image");
		}
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