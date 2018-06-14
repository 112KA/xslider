import {Data} from './components/Data'
import {SlideController} from './SlideController'
import {EventDispatcher} from './core/EventDispatcher'
import {Utils} from './components/Utils'


export class XSlider extends EventDispatcher {
	constructor(...args) {
		super();

		this.data = new Data();
		this.controller = new SlideController();

		Utils.delegate(this, {
			prev:this.controller.prev,
			next:this.controller.next,
			autoplay: {
				start:this.controller.autoplay.start,
				stop:this.controller.autoplay.stop
			}
		});

		this.setup(...args);
	}

	setup(...args) {
		console.log('args: ', args);

		this.dispose();

		this.data.setup(...args);

		this.controller.setup(this.renderer, this.data);
	}

	dispose() {
		this.controller.dispose();
		this.data.dispose();
	}
}
