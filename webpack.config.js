var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src'),
            }
        ]
    }
    // output: {
    //     path: path.join(__dirname, 'build'),
    //     filename: 'bundle.js',
    //     publicPath: '/static/'
    // },
};