import { Vec2, Vec3, Vec4 } from '../geom/Vec';

export const BaseTransition = {
  vertexShader: `
attribute vec2 position;

void main(void) {
	gl_Position = vec4(position, 0.0, 1.0);
}
`,

  fragmentShader: `
precision highp float;

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform float progress;
uniform vec2 resolution;
uniform vec2 gradient;

void main(void) {
	vec2 uv = gl_FragCoord.xy /resolution.xy;
	vec4 color0 = texture2D(texture0, uv);
	vec4 color1 = texture2D(texture1, uv);
	float v = smoothstep(0.0, 1.0, progress * (1.0+gradient.x+gradient.y) - ((1.0-uv.x)*gradient.x+uv.y*gradient.y));
	gl_FragColor = mix(color0, color1, v);
}
`,

  uniforms: {
    gradient: { value: new Vec2(1.0, 1.0) },
  },

  extend(o) {
    return Object.assign({}, this, o);
  },
};
