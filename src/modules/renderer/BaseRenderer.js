import {EventDispatcher} from '../core/EventDispatcher'

export class BaseRenderer extends EventDispatcher {
	constructor() {
		super();
	}
	
	setup(data, model) {
		this.data = data;
		this.model = model;
	}

	dispose() {}

	render(indexer) {}

	resize(e) {
		this.width = e.width;
		this.height = e.height;
	}
}
