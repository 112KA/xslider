import {BaseTransition} from './BaseTransition'
import {Vec2, Vec3, Vec4} from '../geom/Vec'



export const PixelateWipeTransition = BaseTransition.extend({

fragmentShader : `

precision highp float;

#define N 10.0

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;
uniform vec2 gradient;

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution;
	float aspect = resolution.x / resolution.y;

	float v = mix(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-p.x)*gradient.x+p.y*gradient.y));
	v = clamp(v, 0.0, 1.0);
	v = floor(v * 16.0) / 16.0;

	p -= 0.5;

	float pv = min(v, 1.0 - v) * 2.0;	//0.0-1.0
	vec2 steps = vec2(aspect, 1.0) * N / pv;
	steps = min(steps, resolution.xy);
	p = (floor(p * steps) + 0.5) / steps;

	p += 0.5;

	vec4 c0 = texture2D(texture0, p);
	vec4 c1 = texture2D(texture1, p);

	// v = step(0.5, v);

	gl_FragColor = mix(c0, c1, v);
}
`,

	uniforms: {
		gradient: { value: new Vec2(0.5, 0) },
	}
});


