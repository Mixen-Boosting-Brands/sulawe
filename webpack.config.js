const webpack = require('webpack');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './assets/src/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    devtool: false,
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}