import {BaseTransition} from './BaseTransition'



export const PixelateTransition = BaseTransition.extend({

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


#define N 10.0

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution;
	float aspect = resolution.x / resolution.y;
	float v = min(progress, 1.0 - progress) * 2.0;	//0.0-1.0
	v = floor(v * 30.0) / 30.0;
	
	vec2 steps = vec2(aspect, 1.0) * N / v;

	p -= 0.5;

	steps = min(steps, resolution.xy);
	p = (floor(p * steps) + 0.5) / steps;

	p += 0.5;

	vec4 c0 = texture2D(texture0, p);
	vec4 c1 = texture2D(texture1, p);

	gl_FragColor = mix(c0, c1, progress);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
	}
});


