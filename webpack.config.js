const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //引入
//path为内置对象
// module.exports = {}  为导出方式

// 凡是关于webpack的配置都在这里配置


module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        module: './src/module.js'
    },

    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // module: {
    //     rules: {
    //         test: /\.js$/,
    //         exclude: '/node_modules/',
    //         loader: 'babel-loader'
    //     }
    // },     //loader使用


    // plugins: [
    //     new HtmlWebpackPlugin({     单入口
    //         template: './3.html'
    //     })
    // ]                //使用

    // 多入口
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.js',
            filename: 'plugin1.js',
            chunks: ['index'],         //手动告诉webpack要引入什么文件
            minify: {
                // 删除index.html中的注释
                removeComments: true,
                // 删除各种html标签属性值的双引号
                removeAttributeQuotes: true,
                // 删除index.html中的空格
                collapseWhitespace: true,
            }
        })
    ],               //使用
    plugins: [
        new HtmlWebpackPlugin({
            template: './module.js',
            filename: 'plugin2.js',
            chunks: ['module']
        })
    ]

};

