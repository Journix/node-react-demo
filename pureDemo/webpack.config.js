'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

let env = args.env || "dist";
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @return {Object} Webpack config
 */
function buildConfig(env = 'dev') {
  let config = require(path.join(__dirname, 'cfg/' + env));
  return config;
}
console.log(env);
console.log(JSON.stringify(buildConfig(env)));
module.exports = buildConfig(env);