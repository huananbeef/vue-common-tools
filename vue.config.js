/*
 * @Author: huananbeef
 * @Date: 2021-05-25 11:30:08
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-05-25 15:56:39
 * @Description: file content
 */
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
    publicPath: './',
    devServer:{
        host: 'localhost',
        port: 8080,
        https: false, // 是否启用https协议
        open: true, // 设置是否自动打开浏览器
        hotOnly: true, // 是否开热更新
    },
    chainWebpack: config => {
        config.resolve.symlinks(true); // 修复热更新失效
        config.resolve.alias.set('@', resolve('src')) // 添加别名
        
    }
}