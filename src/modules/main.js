
import {Data} from './Data'
import {SlideController} from './SlideController'
import {EventDispatcher} from './core/EventDispatcher'


export class XSlider extends EventDispatcher {
	constructor(...args) {
		super();

		this.data = new Data();
		this.controller = new SlideController();

		this.setup(...args);
	}

	setup(...args) {
		console.log('args: ', args);

		this.data.setup(...args);

		this.renderer = this.data.getRenderer();
		this.renderer.setup(this.data);

		this.controller.setup(this.renderer, this.data);
	}

	dispose() {
		this.renderer.dispose();
		this.data.dispose();
	}
}
