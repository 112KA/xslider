const path = require('path');
const webpack = require("webpack");
const ConcatPlugin = require('webpack-concat-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		xslider: './src/xslider.js',
	},
	output: {
		filename: 'dist/[name].js',
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
	plugins: [
		new ConcatPlugin({
		    // examples
		    uglify: false,
		    sourceMap: false,
		    name: 'vendor',
		    outputPath: './develop/',
		    fileName: '[name].js',
		    filesToConcat: [
		    	'./node_modules/three/build/three.min.js', 
		    	// './node_modules/dom-to-image/dist/dom-to-image.min.js'
		    	'./node_modules/dom-to-image/src/dom-to-image.js'
		    ],
		    attributes: {
		        async: false
		    }
		}),
		new ExtractTextPlugin('dist/xslider.css'),
		// new webpack.optimize.UglifyJsPlugin()
	],
	devServer: {
	    contentBase: __dirname,
	    port: 3000,
	},
	devtool: 'source-map'
};