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
uniform vec2 fade;

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
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		fade: { value: new THREE.Vector2(0.5, 0.5) },
	}

});
*/


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
// uniform vec2 fade;

uniform float dark_low, dark_high, light_low, light_high;
uniform float brightness, contrast, saturation;
uniform vec3 light_tint, dark_tint;

uniform float rgbOffsetOpt;
uniform float horzFuzzOpt;
uniform float zoom;
uniform float time;

uniform float t_amount, exposure;

const vec3 lumc = vec3(0.2125, 0.7154, 0.0721);
const vec3 avg_lum = vec3(0.5, 0.5, 0.5);


vec3 tint(vec3 col)
{
	float bri = (col.x + col.y + col.z)/3.0;

	float v = smoothstep(dark_low, dark_high, bri);
	col = mix(dark_tint * bri, col, v);

	v = smoothstep(light_low, light_high, bri);
	col = mix(col, min(light_tint * col, 1.0), v);

	vec3 intensity = vec3(dot(col.rgb, lumc));
	vec3 sat_color = mix(intensity, col.rgb, saturation);
	vec3 con_color = mix(avg_lum, sat_color, contrast);
	
	return (con_color - 1.0 + brightness) * exposure;
}

// Noise generation functions borrowed from:
// https://github.com/ashima/webgl-noise/blob/master/src/noise2D.glsl

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
	// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

	// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

	// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

	// Gradients: 41 points uniformly over a line, mapped onto a diamond.
	// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

	// Normalise gradients implicitly by scaling m
	// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

	// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main(void) {

	vec2 p =  gl_FragCoord.xy/resolution.xy;
	vec2 p0 = p;
	vec2 p1 = p;
	p0 -= 0.5;
	p1 -= 0.5;
	p0 *= 1.0 - progress * zoom;
	p1 *= 1.0 - (1.0 - progress) * zoom;
	p0 += 0.5;
	p1 += 0.5;

	// float fuzzOffset = snoise(vec2(time*15.0, p.y*80.0)) * 0.003;
	// float largeFuzzOffset = snoise(vec2(time*1.0, p.y * 25.0)) * 0.004;
	// float f_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * progress;
	// float b_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * (1.0 - progress);

	float fuzzOffset = snoise(vec2(time*15.0, p.y*20.0)) * 0.003;
	float largeFuzzOffset = snoise(vec2(time*1.0, p.y * 3.0)) * 0.004;
	float f_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * progress;
	float b_xoff = (fuzzOffset + largeFuzzOffset) * horzFuzzOpt * (1.0 - progress);

	vec3 f_col = vec3(
		texture2D(texture0,	vec2(p0.x + f_xoff -0.01 * rgbOffsetOpt * progress, p0.y)).r,
		texture2D(texture0, vec2(p0.x + f_xoff,	  p0.y)).g,
		texture2D(texture0, vec2(p0.x + f_xoff +0.01 * rgbOffsetOpt * progress, p0.y)).b
	);

	vec3 b_col = vec3(
		texture2D(texture1, vec2(p1.x + b_xoff -0.01 * rgbOffsetOpt * (1.0 - progress), p1.y)).r,
		texture2D(texture1, vec2(p1.x + b_xoff,	  p1.y)).g,
		texture2D(texture1, vec2(p1.x + b_xoff +0.01 * rgbOffsetOpt * (1.0 - progress), p1.y)).b
	);

	vec3 ff_col = f_col;
	ff_col = tint(ff_col);
	ff_col = mix(f_col, ff_col, t_amount * progress);

	vec3 bb_col = b_col;
	bb_col = tint(bb_col);
	bb_col = mix(b_col, bb_col, t_amount * (1.0 - progress));

	gl_FragColor = vec4(mix(ff_col, bb_col, progress), 1.0);
}
`,

	uniforms: {
		texture0: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		texture1: { value: new THREE.Texture(null, null, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.LinearFilter) },
		progress:{ value: 0 },
		resolution: { value: new THREE.Vector2(0.0, 0.0) },
		// fade: { value: new THREE.Vector2(0.5, 0.5) },
		dark_low:{ value: 100 },
		dark_high:{ value: 200 },
		dark_low:{ value: 200 },
		dark_high:{ value: 255 },
		contrast:{ value: 1 },
		brightness:{ value: 1 },
		saturation:{ value: 100 },
		light_tint: { value: new THREE.Vector3(0.5, 0.5, 0.5) },
		dark_tint: { value: new THREE.Vector3(0.2, 0.2, 0.2) },
		zoom:{ value: 0.3 },
		time:{ value: 0 },
		t_amount:{ value: 0.5 },
		exposure:{ value: 30 },
		horzFuzzOpt:{ value: 10 },
		rgbOffsetOpt:{ value: 20 },
	}

});


