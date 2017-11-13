'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  devtool: 'sourcemap',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: path.join(__dirname, '../src/assets/index-template.html'),
        inject:true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel'
});

module.exports = config;
