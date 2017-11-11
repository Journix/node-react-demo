const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');


module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(['../dist/*'], { allowExternal: true }),
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
});