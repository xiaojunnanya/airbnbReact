/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 16:50:45
 * @LastEditTime: 2023-03-27 16:34:42
 * @LastEditors: 肖俊男
 * @Description: 配置别名：@ => src
 * @FilePath: \airbnb\craco.config.js
 * 前端实习生：鲸落
 */

const path = require('path')

const CracoLessPlugin = require('craco-less')

module.exports = {
    // webpack配置@
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    // 配置less
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ]
}