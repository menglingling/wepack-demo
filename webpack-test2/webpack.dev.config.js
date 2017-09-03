var path = require('path')

module.exports={
    entry:'./src/script/main.js',
    output:{
        //path:'./dist/js',
        path:path.resolve(__dirname, './dist'),
        filename:'bundle.js'
    }
}