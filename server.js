var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');

var port = process.port ? process.port : 8000

config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + port);
config.entry.app.unshift("webpack/hot/only-dev-server");

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
	hot: true,
	inline: true,
	host: '0.0.0.0',
	contentBase: './dist',
	historyApiFallback: false,
	// noInfo: true,
	stats: {
		colors: true
	},
	watchOptions: {
		poll: true
	}
});

server.listen(port);