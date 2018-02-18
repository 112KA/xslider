import {BaseTransition} from './BaseTransition'

//glsl transition いっぱい
//https://gl-transitions.com/gallery

//Slices transition effect 
//https://www.shadertoy.com/view/ltVSzd

//Disintegration Transition 
//https://www.shadertoy.com/view/lslSz7

//from beautifl
//Pixel Wipe
//http://beautifl.net/?id=1229
//SwingingLight forked from: Fluid on the Video
//http://beautifl.net/?id=632
//dora muraken effect
//http://beautifl.net/?id=121

/*
export const TestTransition = BaseTransition.extend({


	vertexShader : `
precision highp float;

attribute vec3 position;
attribute vec2 uv;

uniform vec4 uv0;
uniform vec4 uv1;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv0;
varying vec2 vUv1;

void main(void) {
	vUv0 = vec2(uv0.x+uv0.z*uv.x, uv0.y+uv0.w*uv.y);
	vUv1 = vec2(uv1.x+uv1.z*uv.x, uv1.y+uv1.w*uv.y);

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

varying vec2 vUv0;
varying vec2 vUv1;

void main(void) {
	vec2 uv = gl_FragCoord.xy /resolution.xy;
	float f = step(0.5, progress);
	float rate = (1.0-f) * (1.0 - (0.5 - progress)/0.5) + f * (1.0 - (progress-0.5) / 0.5);
	vec4 color0 = texture2D(texture0, vUv0);
	vec4 color1 = texture2D(texture1, vUv1);
	color0.rg += rate;
	color1.rgb -= rate;
	// gl_FragColor = (1.0 - f) * color0 + f * color1;
	float v = progress * (1.0+fade.x+fade.y) - (uv.x*fade.x+(1.0-uv.y)*fade.y);
	v = clamp(v, 0.0, 1.0);
	gl_FragColor = mix(color0, color1, v);
}
`,

});
*/


export const TestTransition = BaseTransition.extend({

//Cube Transition 
//https://gl-transitions.com/editor/cube

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

#define floating 3.0
#define unzoom 0.3
#define reflection 0.4
#define perspective 0.7

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;


vec2 project (vec2 p) {
  return p * vec2(1.0, -1.2) + vec2(0.0, -floating/100.0);
}

bool inBounds (vec2 p) {
  return all(lessThan(vec2(0.0), p)) && all(lessThan(p, vec2(1.0)));
}

vec2 xskew (vec2 p, float persp, float center) {
  float x = mix(p.x, 1.0-p.x, center);
  float d = distance(center, 0.5);
  return (
    (vec2( x, (p.y - 0.5 * (1.0 - persp) * x) / (1.0 + (persp - 1.0) * x) ) - vec2(0.5 - d, 0.0))
    * vec2(0.5 / d * -sign(center-0.5), 1.0)
    + vec2(center, 0.0)
  );
}

void main(void) {
	vec2 uv = gl_FragCoord.xy /resolution.xy;

	float uz = unzoom * 2.0 * (0.5 - distance(0.5, progress));
	vec2 p = -uz * 0.5 + (1.0 + uz) * uv;
	// (1.0-uz) / 2.0 + uv * uz
	// 0.5 - 0.5 * uz + uv * uz 

	vec2 fromP, toP;

	fromP = xskew(
		p / vec2(1.0-progress, 1.0),
		mix(pow(1.0-progress, 2.0), 1.0, perspective),
		1.0
	);

	toP = xskew(
		(p - vec2(1.0-progress, 0.0)) / vec2(progress, 1.0),
		1.0-mix(1.0-progress, 0.0, perspective),
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

		vec4 bg = vec4(0.1, 0.1, 0.1, 1.0);
		vec4 color0 = texture2D(texture0, fromP);
		vec4 color1 = texture2D(texture1, toP);

		gl_FragColor = bg
			+ float(inBounds(fromP)) * mix(bg, color0, reflection * mix(1.0, 0.0, fromP.y))
			+ float(inBounds(toP)) * mix(bg, color1, reflection * mix(1.0, 0.0, toP.y));
	}




}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
	}
});


