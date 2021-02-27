import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/xslider.js', // Path relative to package.json
  output: {
    name: 'XSlider',
    exports: 'named',
    intro: () => {
      return 'var XSLIDER_VERSION = ' + JSON.stringify(require('./package.json').version);
    },
  },
  plugins: [scss(), commonjs(), buble()],
  exclude: 'node_modules/**',
};
