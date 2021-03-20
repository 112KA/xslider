import buble from 'rollup-plugin-buble';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';

const input = 'src/xslider.js',
  inputESM = {
    'dist/xslider.esm': 'src/xslider.js',
  },
  intro = () => 'var XSLIDER_VERSION = ' + JSON.stringify(require('./package.json').version);

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
      buble(),
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
      buble(),
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
      buble()
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
