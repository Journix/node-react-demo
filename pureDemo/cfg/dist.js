'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  devtool: 'sourcemap',
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel'
});

module.exports = config;
