const path = require('path');
const PATH = 'dist';
const DEBUG = true;
module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, PATH),
        filename: 'bundle.js',
    },
    cache: DEBUG,
    debug: DEBUG,
    devtool: DEBUG ? 'eval-source-map' : false,
    module: {
        loaders: [
            { test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                },
                plugins: ['transform-runtime'],
            },
        ],
    },
};
