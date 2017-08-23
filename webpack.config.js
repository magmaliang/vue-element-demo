var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var contentBase = path.join(__dirname, "./release/");

module.exports = {
	entry: './src/main.js',
	output: {
		path: contentBase,
		filename: "[name].js",
		chunkFilename: "[name].js",
		libraryTarget: "umd",
		publicPath: '/'
	},
	module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader?sourceMap=true']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader',
                        css: 'style-loader!css-loader'
                    }
                }
            },
            {
                test: /\.[ej]s$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
	,devServer: {
        contentBase: contentBase,
        port: "9994",
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
	,plugins: [
		new HtmlWebpackPlugin({
			template: "./index.ejs"
		})
	]
}