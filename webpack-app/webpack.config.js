var path = require('path')
var htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'js/[name]-bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: path.resolve(__dirname, './node_modules'),
                include:path.resolve(__dirname, './src')

            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                        plugins: [
                                    require('postcss-import')(),
                                    require('autoprefixer')({
                                        browsers:['last 5 version']
                                    })
                          ]
                        }
                    }
                  ]
            },{
                test:/\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                        plugins: [
                                    require('postcss-import')(),
                                    require('autoprefixer')({
                                        browsers:['last 5 version']
                                    })
                          ]
                        }
                    },
                    'less-loader'

                  ]
            },{
                test:/\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                        plugins: [
                                    require('postcss-import')(),
                                    require('autoprefixer')({
                                        browsers:['last 5 version']
                                    })
                          ]
                        }
                    },
                    'scss-loader'

                  ]
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
            {
                test:/\.(jpg|png|gif|svg|jpeg)$/i,
                loaders:[
                    'url-loader?linit=1000?name=assets/[name]-[hash:5].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    }, 
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body'
        })
    ]
}