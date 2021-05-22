import { BaseTransition } from './BaseTransition';
import { Vec2, Vec3, Vec4 } from '../geom/Vec';

/**
 * It's based on {@link https://gl-transitions.com/editor/CrossZoom CrossZoom by rectalogic}.
 */
export const CrossZoomTransition = BaseTransition.extend({
  fragmentShader: `
precision highp float;

#define PI 3.141592653589793

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 direction;
uniform vec2 resolution;
// uniform vec2 fade;
uniform float strength;

float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {
    if (time == 0.0)
        return begin;
    else if (time == duration)
        return begin + change;
    time = time / (duration / 2.0);
    if (time < 1.0)
        return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;
    return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;
}

float Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {
    return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;
}

/* random number between 0 and 1 */
float hash(in vec3 scale, in float seed) {
    /* use the fragment position for randomness */
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

vec3 crossFade(in vec2 uv, in float dissolve) {
    return mix(texture2D(texture0, uv).rgb, texture2D(texture1, uv).rgb, dissolve);
}

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution.xy;

  float diff = smoothstep(0.1, 0.9, progress);
	vec2 center = vec2(mix(0.5, diff, direction.x), mix(0.5, diff, direction.y));
	// vec2 center = vec2(mix(0.5, diff, 0.0), mix(0.5, diff, 1.0));
	float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);
	float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);
	vec3 color = vec3(0.0);
	float total = 0.0;
	vec2 toCenter = center - p;
	float offset = hash(vec3(12.9898, 78.233, 151.7182), 0.0);

	for (float t = 0.0; t <= 40.0; t++) {
	  float percent = (t + offset) / 40.0;
	  float weight = 4.0 * (percent - percent * percent);
	  color += crossFade(p + toCenter * percent * strength, dissolve) * weight;
	  total += weight;
	  gl_FragColor = vec4(color / total, 1.0);
	}
}
`,

  uniforms: {
    strength: { value: 1.0 },
  },
});
