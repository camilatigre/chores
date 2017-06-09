const path = require('path');

module.exports = {
    entry: [
        // Set up an ES6-ish environment
        'babel-polyfill',

        // Add your application's scripts below
        './app/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './public',
        inline: true,
        port: 9000,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname, 'app'),
            ],
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0', 'react'],
            },
        }],
    },
};
