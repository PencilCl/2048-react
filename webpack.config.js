var webpack = require('webpack');

module.exports = {
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
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			}
		]
	},

	plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
          }),
        new webpack.optimize.UglifyJsPlugin()
	]
}