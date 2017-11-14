'use strict';

const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');


// Add needed plugins here
// let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = merge({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8000',
    // 'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: 'src/assets/index-template.html',
        inject:true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new BowerWebpackPlugin({
    //   searchResolveModulesDirectories: false
    // })
  ],
  module: {
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
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        // include: [].concat(
        //   config.additionalPaths,
        //   [ path.join(__dirname, '../src') ]
        // )
      }
    ]
  }
});


module.exports = config;
