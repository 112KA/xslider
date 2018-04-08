import {BaseTransition} from './BaseTransition'

/**
 * It's based on {@link https://gl-transitions.com/editor/crosswarp crosswarp by Eke Péter}.
 */
export const CrossWarpTransition = BaseTransition.extend({

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
uniform vec2 gradient;

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution.xy;

	float v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));
	v = clamp(v, 0.0, 1.0);

	vec2 p0 = p;
	vec2 p1 = p;

	p0 -= 0.5;
	p0 *= (1.0 - v);
	p0 += 0.5;

	p1 -= 0.5;
	p1 *= v;
	p1 += 0.5;

	vec4 color0 = texture2D(texture0, p0);
	vec4 color1 = texture2D(texture1, p1);

	gl_FragColor = mix(color0, color1, v);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		gradient: { value: new THREE.Vector2(0.5, 0.5) },
	}
});