import {BaseTransition} from './BaseTransition'


/**
 * It's based on {@link https://gl-transitions.com/editor/cube cube by gre}.
 */
export const CubeTransition = BaseTransition.extend({

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
uniform vec4 bgColor;

uniform float floating;
uniform float unzoom;
uniform float perspective;
uniform float reflection;


vec2 project (vec2 p) {
  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.0);
}

bool inBounds (vec2 p) {
  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));
}

/**
 * persp 0-1 1:正対
 * center 1.0:from 0.0:to
 */
vec2 xskew (vec2 p, float persp, float center) {
  float x = mix(p.x, 1.0-p.x, center);
  float d = distance(center, 0.5);
  return (
    (vec2( x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x)) - vec2(0.5 - d, 0.0))
    * vec2(0.5 / d * -sign(center-0.5), 1.0)
    + vec2(center, 0.0)
  );
}

void main(void) {
	vec2 uv = gl_FragCoord.xy /resolution.xy;

	float uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));
	vec2 p = -uz * 0.5 + (1.0 + uz) * uv;

	vec2 fromP, toP;

	fromP = xskew(
		p / vec2(1.0-progress, 1.0),
		mix(1.0-progress, 1.0, perspective),
		1.0
	);

	toP = xskew(
		(p - vec2(1.0-progress, 0.0)) / vec2(progress, 1.0),
		1.0 - mix(1.0-progress, 0.0, perspective),
		0.0
	);

	if (inBounds(fromP)) {
		gl_FragColor = texture2D(texture0, fromP);
	}
	else if (inBounds(toP)) {
		gl_FragColor = texture2D(texture1, toP);
	}
	else {
		fromP = project(fromP);
		toP = project(toP);

		vec4 color0 = texture2D(texture0, fromP);
		vec4 color1 = texture2D(texture1, toP);

		gl_FragColor = bgColor
			+ float(inBounds(fromP)) * mix(bgColor, color0, reflection * mix(1.0, 0.0, fromP.y))
			+ float(inBounds(toP)) * mix(bgColor, color1, reflection * mix(1.0, 0.0, toP.y));
	}




}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		bgColor: { value: new THREE.Vector4(0.1, 0.1, 0.1, 1.0) },
		unzoom:{ value: 0.3 },
		floating:{ value: 3.0 },
		perspective:{ value: 0.7 },
		reflection:{ value: 0.4 },
	}
});