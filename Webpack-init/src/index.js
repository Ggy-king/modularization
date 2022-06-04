import { entry, output } from '../webpack.config.js';
import age from './module.js';

console.log('index.js', age);

import 'core-js/stable'
let a = 5;
const d = 15;



// 1 entry  entry:'' => entry:{main:'',search:'',...}
// 指定入口文件  单入口不用对象 多入口用对象写法

// output: { }   指定出口文件

// 2 path   path.resolve()方法用来拼接（）内路径文件
// path:path.resolve    filename:''   可以改文件名字

// 3 output: {
//     path: path.resolve(__dirname, 'dist'),
//         filename:'[name].js'
// }                                        [name]  该写法固定 可以根据不同输入文件自动生成对应输出口文件 而不会报错



// 1 loader
// loader让webpack能够去处理那些非js文件的模块

// 如 babel-loader 起到联通作用 其中babel并不是真正干活的那个
// 安装 npm install --save-dev babel-loader@8.1.0 @babel/core@7.11.0 @babel/preset-env@7.11.0

// 1 plugins 插件
//  loader被用于帮助webpack处理各种模板，而插件则用于执行范围更广的任务
// 先选取一个插件进行讲解 html-webpack-plugin 
// 安装 配置