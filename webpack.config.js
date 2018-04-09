const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
                /*use: ExtractTextPlugin.extract({
                    fallback: "style-loader"
                , use:[{
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },
                    { loader: 'postcss-loader', options: { sourceMap: true, plugins: [autoprefixer()] } },
                    {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]  })*/ //css in separate
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
                }] //css in js file
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
    ]
};