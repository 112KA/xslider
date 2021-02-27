import { BaseTransition } from './BaseTransition';
import { Vec2, Vec3, Vec4 } from '../geom/Vec';

export const PixelateTransition = BaseTransition.extend({
  fragmentShader: `
precision highp float;


#define N 10.0

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution;	//0.0-1.0
	float aspect = resolution.x / resolution.y;
	float v = min(progress, 1.0 - progress) * 2.0;	//0.0-1.0
	v = floor(v * 30.0) / 30.0;

	if(v > 0.0) {
		vec2 steps = vec2(aspect, 1.0) * N / v;
	
		p -= 0.5;
	
		steps = min(steps, resolution.xy);
		p = (floor(p * steps) + 0.5) / steps;
	
		p += 0.5;
	}

	vec4 c0 = texture2D(texture0, p);
	vec4 c1 = texture2D(texture1, p);

	gl_FragColor = mix(c0, c1, progress);
}
`,

  uniforms: {},
});
