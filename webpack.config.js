var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'eval-source-map', //配置生成Source map

	entry: {
		app: ['./index.js']
	},

	output: {
		path: __dirname + '/dist',
		filename: "[name].js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'			,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(scss|css)$/,
				loaders:['style', 'css', 'postcss', 'sass']
			}
		]
	},

	postcss: [
		require('autoprefixer')
	],

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]

}