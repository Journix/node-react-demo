'use strict';
var fs = require('fs');
let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./dev');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../server.render.js'),
  output: {
    filename: 'server.render.bundle.js'
  },
  target: 'node',
  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, '../node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext
  }, {}),
  node: {
    __filename: true,
    __dirname: true
  }
});

// Add needed loaders to the defaults here
config.module.loaders.push([
  { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react,presets[]=stage-0' }
]);

module.exports = config;
