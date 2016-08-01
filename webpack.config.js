const webpack = require("webpack");

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "./res/bundle.js"
	},
	plugins: [
		new webpack.ProvidePlugin({
			riot: "riot"
		})
	],
	module: {
		preLoaders: [
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				loader: "riotjs-loader"
			}
		],
		loaders: [
			{
				test: /\.js$|\.tag$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};
