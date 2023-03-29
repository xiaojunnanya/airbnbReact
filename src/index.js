/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 16:16:14
 * @LastEditTime: 2023-03-29 14:04:27
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\index.js
 * 前端实习生：鲸落
 */
//第三方放入统一放在上面：
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import React, { Suspense } from "react"
import { Provider } from "react-redux"
import store from "./store"


//主题的配置，比如主题色什么的
import { ThemeProvider } from "styled-components"


// 项目文件的导入在下面：
//重置样式
import 'normalize.css'
import '@/assets/css/index.less'

import App from './App'
// 导入主题：使用方式：color: ${props => props.theme.color.primaryColor}
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <Provider store={store}>
        <Suspense fallback="loading...">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App></App>
                </BrowserRouter>
            </ThemeProvider>
        </Suspense>
    </Provider>
)