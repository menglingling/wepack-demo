1.mkdir webpack-test
2.cd webpack-test
3.npm init
4.npm install webpack --save-dev
5.ls （查看当前目录子目录）
6 webpack hello.js hello.bundle.js
7.command not found
8.npm install webpack -g 
9 webpack 支持AMD common.js es6 模块化
（
Commonjs解决了模块化的问题，Commonjs是同步加载模块，当要用到该模块了，现加载现用；
浏览器里考虑加载速度性能，又出了个规范，可以实现异步加载依赖模块，并且会提前加载那就是AMD规范；代表require.js;

AMD和CMD明显不同的地方是调用，和声明依赖的地方。AMD和CMD都是用difine和require，但是CMD标准倾向于在使用过程中提出依赖，就是不管代码写到哪突然发现需要依赖另一个模块，那就在当前代码用require引入就可以了，规范会帮你搞定预加载，你随便写就可以了。但是AMD标准让你必须提前在头部依赖参数部分写好（没有写好？ 倒回去写好咯）。这就是最明显的区别, 代Sea.js。

http://www.cnblogs.com/qianshui/p/5216580.html?utm_source=tuicool&utm_medium=referral

）
10 天生不支持css文件打包，会报错
需要安装css-loader,并在require的时候指定 
require('css-loader!./style.css')

11 加上css-loader 不会报错 但是不显示style.css样式
需要安装sty-loader,并在 require的时候指定
require('style-loader!css-loader!./style.css')

注意先 style-loader 后css-loader 否则会报错

13这里 css-loader 是使webpack可以处理 css文件
style-loader 是使页面创建style标签插入我们的css文件内容

14通过命令行工具 不必在require的时候指定
命令行输入
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'

15 通过命令行
在后面追加 
--watch 可以避免每次都繁琐的手动输入
--progress 看见打包过程
--display-modules 看见所有打包模块
--display-reasons 看见为什么打包模块的原因

总结：
1webpack 安装
2webpack 命令行打包
3webpack引入css js 打包,并使得html里面的css生效
4webpack 相关高级参数

第二节
1.默认查找 webpack.config.js 配置,可通过设置 webpack --config webpack.dev.config.js 来指定执行的配置文件

entry webpack打包入口 三种方式
1 字符串  指定一个入口文件  所有的依赖指定到一个入口文件
2 数组   解决多个平行的不相依赖的文件确想打包在一起
3 对象  多页面应用程序中用到（需要对应改output 用占位符,否则后生成的会覆盖前面的）

output 
占位符 三种方式
1 name
2 hash  （本次打包的版本号）
3 chunkhash (本次打包文件的版本号)

入口页面 index.html
借用webpack插件解决打包后的文件自动引用文件路径的问题,自动化生成index.html 
安装 npm install html-webpack-plugin --save-dev
可配置文件输出路径和js文件生成在index.html文件的中的位置（head ,body）
借用cdn  压缩  删除注释
多页面配置

loader 处理资源文件返回新的资源，可以串联使用，有同步异步用法


安装less
npm install less--save-dev
处理less文件  安装less-loader
npm install less-loader --save-dev

处理项目中模板文件
npm install html-loader --save-dev

图片文件处理
css中
模板文件中
入口 html中

npm install file-loader --save-dev
模板中引入相对路径不打包 可以用require的方式
npm install url-loader --save-dev
可以设置文件的limit 当小于这个范围就会转为base64,否则丢给file-loader
npm install image-webpack-loader --save-dev


 


