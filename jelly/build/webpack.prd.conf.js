const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');


module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['../dist'], { allowExternal: true })
    ]
});