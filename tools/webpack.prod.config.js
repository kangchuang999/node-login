/**
 * Created by kangchuang on 2019/01/01.
 */
var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const appPath = config.appPath;
module.exports = merge(baseWebpackConfig, {

    devtool: false,
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: appPath.indexHTML,
            filename: 'html/home.html',
            title: '登录注册主页',
            inject: 'body',
            chunks: ['home','vendor'],
            // favicon: './favicon.png'
        }),
        new HtmlWebpackPlugin({
            template: appPath.indexHTML,
            filename: 'html/main.html',
            title: '主页',
            inject: 'body',
            chunks: ['main','vendor'],
            // favicon: './favicon.png'
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        }),
    ]
})