'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '../src');
const dfltPort = 8000;

function getDefaultModules() {
  return {
    /* preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ], */
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/build/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
