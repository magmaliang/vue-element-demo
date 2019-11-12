var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var contentBase = path.join(__dirname, "./release/");

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	entry: './src/main.js',
	resolve: {
		alias: {
			'assets': resolve('src/assets')
		},
	},
	output: {
		path: contentBase,
		filename: "[name].js",
		chunkFilename: "[name].js",
		libraryTarget: "umd",
		publicPath: '/'
	},
	
	module: {
		rules: [{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader?sourceMap=true']
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"],
        })
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.[ej]s$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}, {
				test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000, //bytes
						name: '[name].[ext]',
						outputPath: 'assets'
					}
				}
			}
		]
	},
	devServer: {
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
	},
	plugins: [
		new VueLoaderPlugin(),
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: "./index.ejs"
		})
	]
}