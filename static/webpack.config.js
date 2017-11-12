'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

process.env.REACT_WEBPACK_ENV = args.env || "dist";

/**
 * Build the webpack configuration
 * @return {Object} Webpack config
 */
function buildConfig(env = 'dev') {
  let config = require(path.join(__dirname, 'cfg/' + env));
  return config;
}

module.exports = buildConfig(env);