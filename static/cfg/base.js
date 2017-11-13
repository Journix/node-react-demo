'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// let additionalPaths = [];

module.exports = {
  // additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../build'),
    filename: 'bundle.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './build/',
    // historyApiFallback: true,   //"start": "webpack-dev-server --inline --content-base . --history-api-fallback"
    // hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx'],
  //   alias: {
  //     actions: `${defaultSettings.srcPath}/actions/`
  //   }
  // },
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

