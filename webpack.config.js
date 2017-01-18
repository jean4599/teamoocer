 var path = require('path');
// var webpack = require('webpack');

// module.exports = {
// 	entry:'./src/app.js',
// 	output:{path: './public', filename:'bundle.js'},
// 	watch:true,
// 	module: {
// 		loaders:[
// 			{
// 				test: /\.js$/,
// 				loader:'babel-loader',
// 				test: /.less/,loader: 'style-loader!css-loader!less-loader',
// 				test: /.css$/, loader: "style!css",
// 				exclude:/node_modules/,
// 				query:{
// 					presets:['es2015', 'react']
// 				},
// 			}
// 		],
// 	},
// 	babel: {
// 		"plugins": [["import", {
// 				    "libraryName": "antd",
// 				    "libraryDirectory": "lib",   // default: lib
// 				    "style": true
// 				  }]]
// 		}
// };
var webpack = require('webpack');

module.exports = {
	entry:'./src/app.js',
	output:{path: './public', filename:'bundle.js'},
	watch:true,
	module: {
		loaders: [
			{ test: /.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /.css$/,loader: "style!css" },
			{ test: /.less/,loader: 'style-loader!css-loader!less-loader'},
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query:
				{
				presets:['react','es2015']
				}
			}
		]
	},
	resolve:{
		extensions:['','.js','.json']
	},
	plugins: [
	new webpack.NoErrorsPlugin(),
	new webpack.HotModuleReplacementPlugin()
	],
	babel: {
	"plugins": [["import", {
			    "libraryName": "antd",
			    "libraryDirectory": "lib",   // default: lib
			    "style": true
			  }]]
	}
};