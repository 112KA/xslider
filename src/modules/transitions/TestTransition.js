import {BaseTransition} from './BaseTransition'
import {Vec2, Vec3, Vec4} from '../geom/Vec'

//glsl transition いっぱい
//https://gl-transitions.com/gallery

//Slices transition effect 
//https://www.shadertoy.com/view/ltVSzd

//Disintegration Transition 
//https://www.shadertoy.com/view/lslSz7


//tiling
//http://glslsandbox.com/e#45579.0

//pixelate
//http://glslsandbox.com/e#45747.0

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
	vec4 c0 = texture2D(texture0, p);
	vec4 c1 = texture2D(texture1, p);
	gl_FragColor = mix(c0, c1, progress);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new Vec2(0.0, 0.0) },
		gradient: { value: new Vec2(0.5, 0.5) },
	}

});
*/


export const TestTransition = BaseTransition.extend({

fragmentShader : `
precision highp float;

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;
uniform vec2 gradient;

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution.xy;
	vec4 c0 = texture2D(texture0, p);
	vec4 c1 = texture2D(texture1, p);
	gl_FragColor = mix(c0, c1, progress);
}
`,

	uniforms: {
		gradient: { value: new Vec2(0.5, 0.5) },
	}

});


