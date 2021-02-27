import { BaseTransition } from './BaseTransition';
import { Vec2, Vec3, Vec4 } from '../geom/Vec';

/**
 * It's based on {@link https://gl-transitions.com/editor/morph morph by paniq}.
 */
export const MorphTransition = BaseTransition.extend({
  fragmentShader: `
precision highp float;

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;
// uniform vec2 fade;
uniform float strength;

void main(void) {
	vec2 p = gl_FragCoord.xy /resolution.xy;

	vec4 c0 = texture2D(texture0, p);
	vec4 c1 = texture2D(texture1, p);

	vec2 oa = (((c0.rg + c0.b) * 0.5) * 2.0 - 1.0);
	vec2 ob = (((c1.rg + c1.b) * 0.5) * 2.0 - 1.0);
	vec2 oc = mix(oa,ob,0.5)*strength;

	// float v = smoothstep(0.0, 1.0, progress * (1.0+fade.x+fade.y) - ((1.0-p.x)*fade.x+p.y*fade.y));
	float v = progress;

	c0 = texture2D(texture0, p + oc * v);
	c1 = texture2D(texture1, p - oc * (1.0 - v));

	gl_FragColor = mix(c0, c1, v);
}
`,

  uniforms: {
    strength: { value: 1.0 },
  },
});
