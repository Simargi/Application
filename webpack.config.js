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
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}]
            },
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            }
        ]
    }
};