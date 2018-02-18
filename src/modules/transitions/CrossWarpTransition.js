import {BaseTransition} from './BaseTransition'


export const CrossWarpTransition = BaseTransition.extend({

//Crosswarp Transition 
//https://gl-transitions.com/editor/crosswarp

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

	float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-uv.x)*fade.x+uv.y*fade.y));
	vec4 color0 = texture2D(texture0, (uv-0.5)*(1.0-v)+0.5);
	vec4 color1 = texture2D(texture1, (uv-0.5)*v+0.5);
	gl_FragColor = mix(color0, color1, v);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		fade: { value: new THREE.Vector2(0.5, 0.5) },
	}
});