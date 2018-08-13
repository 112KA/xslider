import {GLRenderer} from './BaseRenderer'
import {Bench} from '../components/debug/Bench'
import {Vec2, Vec3, Vec4} from '../geom/Vec'

const baseVertexShader = `
precision highp float;

attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main(void) {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export class ThreeRenderer extends GLRenderer {
	constructor() {
		super();

    	this.camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
    	this.scene = new THREE.Scene();
	}

	setup(data, container) {
		super.setup(data, container);

		this.renderer = new THREE.WebGLRenderer( { 
			antialias: false, 
			alpha: true, 
			canvas: this.canvas
		});

		const transition = data.option.transition;

		this.mesh = new THREE.Mesh( 

			new THREE.PlaneBufferGeometry(1, 1, 1, 1), 

			new THREE.RawShaderMaterial({
				depthTest: false,
				transparent: true,
				vertexShader: baseVertexShader,
				fragmentShader: transition.fragmentShader,
				uniforms: this._createUniforms(transition.uniforms),
			})
		)

		this.scene.add(this.mesh);
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
	}

	render(indexer) {
		super.render(indexer);

      	this.renderer.render( this.scene, this.camera );
	}

	resize(w, h) {
		super.resize(w, h);

		if(this.mesh) {
			this.mesh.scale.set(w, h, 1);
		}
		this.renderer.setSize( w, h );

		this.camera.aspect = w / h;
		this.camera.position.z = ThreeRenderer.CZ * h;
		this.camera.updateProjectionMatrix();
	}
}

ThreeRenderer.CZ = 1 / Math.tan(30 * Math.PI / 180) * 0.5;
