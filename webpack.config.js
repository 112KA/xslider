const path = require('path');
const webpack = require('webpack');
const ConcatPlugin = require('webpack-concat-files-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, options) => {
  const DEV = options.mode === 'development';
  const plugins = [
    new webpack.DefinePlugin({
      XSLIDER_VERSION: JSON.stringify(require('./package.json').version),
    }),
    new MiniCssExtractPlugin({
      filename: DEV ? 'xslider.css' : 'xslider.min.css',
    }),
  ];

  if (DEV) {
    plugins.push(
      new ConcatPlugin({
        bundles: [
          {
            dest: './samples/asset/js/vender.js',
            src: [
              // './node_modules/three/build/three.min.js',
              // './node_modules/dom-to-image/dist/dom-to-image.min.js'
              // './node_modules/dom-to-image/src/dom-to-image.js'
              './node_modules/dat.gui/build/dat.gui.min.js',
              // './node_modules/babel-polyfill/dist/polyfill.min.js'
            ],
          },
        ],
      }),
    );
  }

  return {
    entry: {
      xslider: './src/xslider.js',
    },
    output: {
      filename: DEV ? 'dist/[name].js' : 'dist/[name].min.js',
      path: __dirname,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/transform-runtime'],
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.scss/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                url: false, // オプションでCSS内のurl()メソッドの取り込みを禁止する
                sourceMap: DEV,
                importLoaders: 2,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: DEV,
              },
            },
          ],
        },
      ],
    },
    optimization: DEV
      ? {}
      : {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                ecma: 6,
                compress: true,
                output: {
                  comments: false,
                  beautify: false,
                },
              },
            }),
          ],
        },

    plugins,

    target: ['web', 'es5'], // ES5(IE11等)向けの指定

    devServer: {
      contentBase: __dirname,
      port: 3000,
      hot: true,
      inline: true,
      watchContentBase: true,
      open: true,
      openPage: 'develop/',
    },

    devtool: DEV ? 'source-map' : '',
  };
};
