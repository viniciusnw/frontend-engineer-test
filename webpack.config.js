'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = validate({
	devtool: 'source-map',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index')
	],
	output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js'
		},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		HTMLWebpackPluginConfig,
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	module:{
		preLoaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
			loader: 'semistandard'
		}],
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
			loader: 'babel'
		},
		{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
	}]
	}
})