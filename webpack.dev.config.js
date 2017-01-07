var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.css?$/,
                loader: 'style!css',
                include: path.join(__dirname, 'src', 'styles')
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};