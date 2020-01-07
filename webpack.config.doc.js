const dev = require('./webpack.config.dev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = Object.assign({}, dev, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'doc'),
		publicPath: './',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './example/public/index.html',
			title: 'rui-temp',
			filename: 'rui-temp.html'
		})
	]
});
