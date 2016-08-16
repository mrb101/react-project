var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');


module.exports = {
    context: srcPath,
    entry: path.join(srcPath, 'js', 'client.js'),
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders:[
            {
                test: /\.jsx?$/,
                exculed: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
