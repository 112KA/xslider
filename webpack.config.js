const path = require('path');
const webpack = require("webpack");
const ConcatPlugin = require('webpack-concat-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: {
		xslider: './src/xslider.js',
	},
	output: {
		filename: DEV ? 'dist/[name].js' : 'dist/[name].min.js',
		// path: path.join(__dirname, 'dist')
		path: __dirname
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}],
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader'],
			}),
		}],
	},
	
	plugins: DEV ? [
		new ConcatPlugin({
		    // examples
		    uglify: false,
		    sourceMap: false,
		    name: 'vendor',
		    outputPath: './samples/asset/js/',
		    fileName: '[name].js',
		    filesToConcat: [
		    	'./node_modules/three/build/three.min.js', 
		    	// './node_modules/dom-to-image/dist/dom-to-image.min.js'
		    	// './node_modules/dom-to-image/src/dom-to-image.js'
		    	'./node_modules/dat.gui/build/dat.gui.min.js',
		    	// './node_modules/babel-polyfill/dist/polyfill.min.js'
		    ],
		    attributes: {
		        async: false
		    }
		}),
		new webpack.DefinePlugin({
	      XSLIDER_VERSION: JSON.stringify(require("./package.json").version)
	    }),
		new ExtractTextPlugin('dist/xslider.css'),
		// new webpack.optimize.UglifyJsPlugin()
	] : [
		new webpack.DefinePlugin({
	      XSLIDER_VERSION: JSON.stringify(require("./package.json").version)
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		}),
		new ExtractTextPlugin(DEV?'dist/xslider.css':'dist/xslider.min.css'),
	],

	devServer: {
	    contentBase: __dirname,
	    // watchContentBase: true,
	    port: 3000,
	    inline: true,
	},

	devtool: DEV ? 'source-map' : ''
};
