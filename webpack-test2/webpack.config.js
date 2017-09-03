var path = require('path')
var htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output:{
        //path:'./dist/js',
        path:path.resolve(__dirname, './dist'),
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',
            template:'index.html',
            inject:'head',
            chunks:['main','a'],
            title:'webpack hello',
            data:'123',
            minify:{
                removeComments:true,
                collapseWhitespace:true

            }
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            template:'index.html',
            inject:'head',
            chunks:['main','b'],
            title:'webpack hello',
            data:'123',
            minify:{
                removeComments:true,
                collapseWhitespace:true

            }
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            template:'index.html',
            inject:'head',

            excludeChunks:['a','b'],
            title:'webpack hello',
            data:'123',
            minify:{
                removeComments:true,
                collapseWhitespace:true

            }
        })
    ]
}