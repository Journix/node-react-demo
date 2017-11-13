'use strict';
let path = require('path');
let defaultSettings = require('./defaults');


module.exports = {
  port: defaultSettings.port,
  debug: true,
  // devtool: 'eval',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './build/',
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath
  },
  module: {
    'loaders': [{
      'loader': 'babel-loader',
      'test': /\.js$/,
      'exclude': /node_modules/,
      'query': {
        'presets': ['es2015']
      }
    }]
  }
};

