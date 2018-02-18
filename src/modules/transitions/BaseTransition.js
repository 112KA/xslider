import {Utils} from '../utils/Utils'


export const BaseTransition = {

	vertexShader : `
precision highp float;

attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main(void) {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,

	fragmentShader : `
precision highp float;

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;
uniform vec2 fade;

void main(void) {
	vec2 uv = gl_FragCoord.xy /resolution.xy;
	vec4 color0 = texture2D(texture0, uv);
	vec4 color1 = texture2D(texture1, uv);
	float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-uv.x)*fade.x+uv.y*fade.y));
	gl_FragColor = mix(color0, color1, v);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		uv0: { value: new THREE.Vector4(0, 0, 1, 1) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		uv1: { value: new THREE.Vector4(0, 0, 1, 1) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		fade: { value: new THREE.Vector2(1.0, 1.0) },
	},

	extend(o) {
		return Utils.extend(this, o);
	}
}

