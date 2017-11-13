const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');


const devWebpackConfig = merge(baseWebpackConfig, {
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath:'/'
    },
    devtool: 'inline-source-map',
    devServer: {
        port:8080,
        host:'localhost',
        open:true,
        proxy:{

        },
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'index.html',
            inject:true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = devWebpackConfig;