import {GLRenderer} from './BaseRenderer'

import {GLGraphics} from '../components/graphics/GLGraphics'
import {Scene3D} from '../components/graphics/nodes/Scene'
import {XModel} from '../display/XModel'

export class XRenderer extends GLRenderer {
	constructor() {
		super();

		this.scene = new Scene3D();
		// this.scene.context.color.b = 1;
	}
	
	setup(data, container) {
		super.setup(data, container);

		GLGraphics.setup(this.canvas);

		const transition = data.option.transition;
		this.model = new XModel({
			vertexShader: transition.vertexShader,
			fragmentShader: transition.fragmentShader,
			uniforms: transition.uniforms,
		});
		this.mesh = this.model.mesh;

		this.scene.addChild(this.model);
	}

	dispose() {
		super.dispose();

		//TODO: dispose model
	}

	render(indexer) {
		super.render(indexer);
		
		GLGraphics.clear(this.scene.context);
		GLGraphics.renderModel(this.model);
	}

	resize(e) {
		super.resize(e);

		const w = this.width, h = this.height;

		this.canvas.setAttribute("width", w);
		this.canvas.setAttribute("height", h);

		this.scene.camera.setViewport(0,0,w,h);
	}
}