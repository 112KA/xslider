
import {Data} from './Data'
import {SlideController} from './SlideController'
import {EventDispatcher} from './core/EventDispatcher'


export class XSlider extends EventDispatcher {
	constructor(...args) {
		super();

		this.data = new Data();
		this.controller = new SlideController();

		this.transition = "Base";

		this.setup(...args);
	}

	setup(...args) {
		console.log('args: ', args);

		this.data.setup(...args);

		this.controller.setup(this.renderer, this.data);
	}

	dispose() {
		this.controller.dispose();
		this.data.dispose();
	}
}
