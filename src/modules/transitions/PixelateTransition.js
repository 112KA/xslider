import {BaseTransition} from './BaseTransition'



export const PixelateTransition = BaseTransition.extend({

//Pixelate Transition 
//https://www.shadertoy.com/view/MtdXDM

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


#define N 50.0

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;

void main(void) {
	vec2 uv = gl_FragCoord.xy /resolution.xy;
	float aspect = resolution.x / resolution.y;

	float v = min(progress, 1.0 - progress);	//0.0-0.5
	vec2 steps = vec2(aspect * N, N);
	steps = floor(v * steps) / steps * 2.0;
	vec2 size = steps / vec2(aspect * 10.0, 10.0);
	size = max(size, 1.0/resolution.xy);

	uv = (floor(uv / size) + 0.5) * size;
	vec4 color0 = texture2D(texture0, uv);
	vec4 color1 = texture2D(texture1, uv);
	gl_FragColor = mix(color0, color1, progress);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		fade: { value: new THREE.Vector2(1.0, 1.0) },
	}
});


