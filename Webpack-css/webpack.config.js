const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // devServer:{},
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader:'css-loader'
                // use:['style-loader','css-loader']    //这傻鸟东西从右向左执行
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    // loader: 'file-loader',
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name].[ext]',
                        esModule: false,
                        limit: 3000    //3k 小于这个值转化为base64格式
                    }
                }
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]

}