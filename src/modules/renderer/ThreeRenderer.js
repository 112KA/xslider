import {BaseRenderer} from './BaseRenderer'
import {SlideModel} from '../display/SlideModel'
import {Bench} from '../components/debug/Bench'
import {Vec2, Vec3, Vec4} from '../geom/Vec'

export class ThreeRenderer extends BaseRenderer {
	constructor() {
		super();

		this._defineHandlers();

		this.canvas = document.createElement('canvas');
	}

	_defineHandlers() {
		this._onUpdateTexture = () => {
			this.renderer.render( this.scene, this.camera );
		}
	}

	setup(data, model) {
		super.setup(data, model);

		data.dom.container.insertBefore(this.canvas, data.dom.view);

    	this.camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
    	this.scene = new THREE.Scene();

		this.renderer = new THREE.WebGLRenderer( { 
			antialias: false, 
			alpha: true, 
			canvas: this.canvas
		});

		// const transition = data.option.getTransition();
		const transition = data.option.transition;

		this.mesh = new THREE.Mesh( 

			new THREE.PlaneBufferGeometry(1, 1, 1, 1), 

			new THREE.RawShaderMaterial({
				depthTest: false,
				transparent: true,
				vertexShader: transition.vertexShader,
				fragmentShader: transition.fragmentShader,
				uniforms: this._createUniforms(transition.uniforms),
			})
		)

		this.scene.add(this.mesh);

		// this.model.setup(this.mesh);

		this.model.on('updateTexture', this._onUpdateTexture);
	}

	_createUniforms(setting) {
		let ret = {
			texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
			texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
			progress:{ value: 0 },
			resolution: { value: new THREE.Vector2(0.0, 0.0) },
		};

		Object.keys(setting).forEach((key) => {
			let v = setting[key];
			if(v instanceof Vec4) {
				ret[key] = new THREE.Vector4(v.x, v.y, v.z, v.w);
			}
			else if(v instanceof Vec3) {
				ret[key] = new THREE.Vector3(v.x, v.y, v.z);
			}
			else if(v instanceof Vec2) {
				ret[key] = new THREE.Vector2(v.x, v.y);
			}
			else {
				ret[key] = v;
			}
		  })

		return ret;
	}

	dispose() {
		super.dispose();

		this.model.off('updateTexture', this._onUpdateTexture);

		this.data.dom.container.removeChild(this.canvas);
	}

	render(indexer) {
		super.render(indexer);

		this.model.uniforms.progress.value = indexer.progress;
		if(this.model.uniforms.time) {
			this.model.uniforms.time.value = this.data.time;
		}
      	this.renderer.render( this.scene, this.camera );
	}

	resize(e) {
		super.resize(e);

		const w = this.width, h = this.height;

		this.renderer.setSize( w, h );

		this.camera.aspect = w / h;
		this.camera.position.z = ThreeRenderer.CZ * h;
		this.camera.updateProjectionMatrix();
	}
}

ThreeRenderer.CZ = 1 / Math.tan(30 * Math.PI / 180) * 0.5;
