import {GLRenderer} from './BaseRenderer'

import {GLGraphics} from '../components/graphics/GLGraphics'
import {Texture} from '../components/graphics/assets/Texture'
import {Scene3D} from '../components/graphics/nodes/Scene'
import {Vec2} from '../geom/Vec'
import {XModel} from '../display/XModel'

export class XRenderer extends GLRenderer {
	constructor() {
		super();

		this.scene = new Scene3D();
		// this.scene.context.color.b = 1;
	}

	_defineHandlers() {
		this._onUpdateTexture = () => {
			GLGraphics.clear(this.scene.context);
			GLGraphics.renderModel(this.model);
		}
	}
	
	setup(data, container) {
		super.setup(data, container);

		GLGraphics.setup(this.canvas);

		const transition = data.option.transition;
		this.model = new XModel({
			vertexShader: transition.vertexShader,
			fragmentShader: transition.fragmentShader,
			uniforms: this._createUniforms(transition.uniforms),
		});
		this.mesh = this.model.mesh;

		this.scene.addChild(this.model);
	}

	_createUniforms(setting) {
		let ret = {
			texture0: { value: new Texture() },
			texture1: { value: new Texture() },
			progress:{ value: 0 },
			resolution: { value: new Vec2(0.0, 0.0) },
		};

		Object.keys(setting).forEach((key) => {
			let v = setting[key];
			ret[key] = v;
		  })

		return ret;
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