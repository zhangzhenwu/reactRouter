const path = require('path');
const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'src/index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                // include:[path.resolve(__dirname,'react-router-dom'),path.resolve(__dirname,'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "env", "stage-0", "react"
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(eot|svg|jpg|png|woff|woff2|ttf)$/,
                use:'url-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html'),
            filename:'index.html',
            hash:true
        }),
        new CleanWebpackPlugin(path.resolve(__dirname,'dist')),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:9090,
        // hot:true,
        // inline:true
    }
}