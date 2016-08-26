var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var react = require('react');
var loaders = require('./webpack.loaders');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './assets/js/index.jsx' // Your appʼs entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname + '/.tmp/public/js'),
    publicPath: "http://localhost:8080/js",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  },
  devServer: {
    contentBase: "./.tmp/public",
      noInfo: true, //  --no-info option
      hot: true,
      inline: true,
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ]
};
