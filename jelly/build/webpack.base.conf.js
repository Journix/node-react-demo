const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
/*配置的路径是相对package.json所在目录来计算的*/
console.log(path.resolve(__dirname, '../dist'))
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react,presets[]=stage-0',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader'
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader'
        }]
    }
};

