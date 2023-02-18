const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    // 等价于
    // entry: {
    //     main: './src/index.js',
    //     search: './src/search.js'
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' //多入口
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader' // that connects babel and webpack
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
//把 /src 下的index.js转到 /dist 目录下的bundle.js