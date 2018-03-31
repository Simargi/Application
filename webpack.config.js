const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname +'/public',
        filename: 'bundle.js'
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                //exclude: /node_modules/,
                //include: [/node_modules\/simargi-component/],
                loader: "babel-loader",
                options: {
                    presets: ["react", 'es2015', 'stage-0'],
                    plugins: ["transform-decorators-legacy"]
                }
            },
            {
                test: /\.s?(a|c)ss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    }
};