'use strict';

module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    debug: true,
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules)/,
              loader: 'babel-loader', query: { presets: ['react', 'es2015'] } }
        ],
    },
    resolve: {
        moduleDirectories: ['node_modules', './app/bower_components', './app/components'],
        extensions: ['', '.js', '.jsx']
    }
};
