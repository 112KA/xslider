import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const input = 'src/xslider.js',
  inputESM = {
    'dist/xslider.esm': 'src/xslider.js',
  },
  intro = () => 'var XSLIDER_VERSION = ' + JSON.stringify(require('./package.json').version),
  babelOption = {
    babelHelpers: 'bundled',
    // babelHelpers: 'runtime',
  };

export default [
  // UMD builds
  // dist/xslider.min.js
  // dist/xslider.js
  {
    input,
    plugins: [
      scss({
        output: 'dist/xslider.css',
      }),
      nodeResolve(),
      commonjs(),
      babel(babelOption),
    ],
    output: {
      name: 'XSlider',
      file: 'dist/xslider.js',
      format: 'umd',
      indent: false,
      intro,
    },
  },
  {
    input,
    plugins: [
      scss({
        output: 'dist/xslider.min.css',
        outputStyle: 'compressed',
      }),
      nodeResolve(),
      commonjs(),
      babel(babelOption),
      terser(),
    ],
    output: {
      name: 'XSlider',
      file: 'dist/xslider.min.js',
      format: 'umd',
      indent: false,
      intro,
    },
  },

  // ES6 builds
  // dist/xslider.esm.js
  {
    input: inputESM,
    /* prettier-ignore */
    plugins: [
      scss({
        output: 'dist/xslider.css',
      }),
      nodeResolve(),
      commonjs(),
      babel(babelOption),
    ],
    output: {
      dir: './',
      chunkFileNames: 'dist/chunks/[name].js',
      format: 'esm',
      indent: false,
      intro,
    },
  },
];
