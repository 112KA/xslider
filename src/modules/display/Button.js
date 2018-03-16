import {InteractiveObject} from '../core/InteractiveObject'

export class Button extends InteractiveObject {
	constructor() {
		super();
	}

	setup(dom) {
		this.set({target:dom});
	}

	set active(flag) {
		const target = this.get('target');
		if(flag) {
			target.classList.remove("xslider-disabled");
		}
		else {
			target.classList.add("xslider-disabled");
		}
	}

	dispose() {
		this.active = true;
	}
}