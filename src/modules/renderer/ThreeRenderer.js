import {BaseRenderer} from './BaseRenderer'
import {SlideModel} from '../display/SlideModel'
import {Bench} from '../debug/Bench'

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

	setup(data) {
		super.setup(data);

		data.dom.container.insertBefore(this.canvas, data.dom.view);

    	this.camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
    	this.scene = new THREE.Scene();

		this.renderer = new THREE.WebGLRenderer( { 
			antialias: false, 
			alpha: true, 
			canvas: this.canvas
		});

		const transition = data.option.getTransition();

		this.mesh = new THREE.Mesh( 

			new THREE.PlaneBufferGeometry(1, 1, 1, 1), 

			new THREE.RawShaderMaterial({
				depthTest: false,
				transparent: true,
				vertexShader: transition.vertexShader,
				fragmentShader: transition.fragmentShader,
				uniforms: transition.uniforms
			})
		)

		this.model = new SlideModel();
		this.model.setup(this.mesh);
		this.scene.add(this.model.mesh);

		this.model.on('updateTexture', this._onUpdateTexture);
	}

	dispose() {
		super.dispose();

		this.model.off('updateTexture', this._onUpdateTexture);
		this.model.dispose();

		this.data.dom.view.removeChild(this.canvas);
	}

	render(indexer) {
		super.render(indexer);

		const slide0 = this.data.list[indexer.i0]
		, slide1 = this.data.list[indexer.i1];

		this.model.set({ slide0:slide0, slide1:slide1 });
		this.model.uniforms.progress.value = indexer.progress;
      	this.renderer.render( this.scene, this.camera );
	}

	resize(e) {
		super.resize(e);

		const w = this.width, h = this.height;

		this.renderer.setSize( w, h );

		this.camera.aspect = w / h;
		this.camera.position.z = ThreeRenderer.CZ * h;
		this.camera.updateProjectionMatrix();

		this.model.resize(w, h);
	}
}

ThreeRenderer.CZ = 1 / Math.tan(30 * Math.PI / 180) * 0.5;
