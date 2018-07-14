import {EventDispatcher} from '../core/EventDispatcher'

export class BaseRenderer extends EventDispatcher {
	constructor() {
		super();
	}
	
	setup(data, container) {
		this.data = data;
		this.container = container;
	}

	dispose() {}

	render(indexer) {}

	resize(e) {
		this.width = e.width;
		this.height = e.height;
	}
}


export class GLRenderer extends BaseRenderer {
	constructor() {
		super();

		this.canvas = document.createElement('canvas');

		this._defineHandlers();
	}

	_defineHandlers() {
	}
	
	setup(data, container) {
		super.setup(data, container);

		data.dom.container.insertBefore(this.canvas, data.dom.view);
	}

	dispose() {
		super.dispose();

		this.container.off('updateTexture', this._onUpdateTexture);

		this.data.dom.container.removeChild(this.canvas);
	}

	render(indexer) {
		super.render(indexer);

		this.container.uniforms.progress.value = indexer.progress;
		if(this.container.uniforms.time) {
			this.container.uniforms.time.value = this.data.time;
		}
	}

	resize(e) {
		super.resize(e);
	}
}
