import {EventDispatcher} from '../core/EventDispatcher'

export class BaseRenderer extends EventDispatcher {
	constructor() {
		super();
	}
	
	setup(data) {
		this.data = data;
	}

	dispose() {}

	render(indexer) {}

	resize(e) {
		this.width = e.width;
		this.height = e.height;
	}
}
