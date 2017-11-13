'use strict';
let path = require('path');

module.exports = {
  port: 8000,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build/',
    // historyApiFallback: true,   //"start": "webpack-dev-server --inline --content-base . --history-api-fallback"
    // hot: true,
    port: 8000
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

