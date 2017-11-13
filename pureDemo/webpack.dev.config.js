var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // {
            //     test: /\.js?$/,
            //     // loaders: ['react-hot', 'babel'], exclude: /node_modules/
            //     loaders: ['babel'],
            //     exclude: /node_modules/
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // query: {
                //     "plugins": [
                //         // ["transform-runtime", {
                //         //     "helpers": false,
                //         //     "polyfill": false,
                //         //     "regenerator": true,
                //         //     "moduleName": "babel-runtime"
                //         // }],
                //         // "transform-es3-property-literals",
                //         // "transform-es3-member-expression-literals"
                //     ],
                //     "presets": [
                //         ["es2015",
                //             {
                //                 "loose": true,
                //                 "modules": false
                //             }
                //         ],
                //         "react",
                //         "stage-0"
                //     ]
                // }
            },{
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            }
            // { test: /\.less/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        // new webpack.NoErrorsPlugin()
        new HtmlWebpackPlugin({
            title: 'Hello World',
            filename: 'index.html',
            template: path.join(__dirname, 'src/assets/index-template.html'),
            // chunks: ['build']
        })
    ]
};