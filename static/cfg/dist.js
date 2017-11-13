'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');


let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  // cache: false,
  devtool: 'sourcemap',
  // stats: {
  //     hash: false,
  //     version: false,
  //     timings: false,
  //     assets: false,
  //     chunks: false,
  //     modules: false,
  //     reasons: false,
  //     children: false,
  //     source: false,
  //     errors: false,
  //     errorDetails: false,
  //     warnings: false,
  //     publicPath: false
  // },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"production"'
    // }),
    // new BowerWebpackPlugin({
    //   searchResolveModulesDirectories: false
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: 'src/assets/index-template.html',
        inject:true
    }),
    new webpack.NoErrorsPlugin()
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
        loader: 'babel',
        // include: [].concat(
        //   config.additionalPaths,
        //   [ path.join(__dirname, '../src') ]
        //   // [ path.join(__dirname, '/../src') ]
        // )
      }
    ]
  }
});

// Add needed loaders to the defaults here
config.module.loaders.push();

module.exports = config;
