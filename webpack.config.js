'use strict';

module.exports.getConfig = function(type){
    var config = {
        context: __dirname + '/app',
        entry: './index.jsx',
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        debug: true,
        module: {
            loaders: [
                { test: /\.jsx?$/, exclude: /(node_modules)/,
                  loader: 'babel-loader', query: { presets: ['react', 'es2015'] } }
            ],
        },
        resolve: {
            moduleDirectories: ['node_modules', './app/bower_components', './app/component'],
            extensions: ['', '.js', '.jsx']
        }
    };
    return config;
};
