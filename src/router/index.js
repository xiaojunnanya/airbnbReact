/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 17:33:29
 * @LastEditTime: 2023-03-25 17:53:10
 * @LastEditors: 肖俊男
 * @Description: 路由配置
 * @FilePath: \airbnb\src\router\index.js
 * 前端实习生：鲸落
 */

import { Navigate } from "react-router-dom"
import React from "react"

// 组件懒加载
const Home = React.lazy(() => import("@/views/home/Home"))
const Detail = React.lazy(() => import("@/views/detail/Detail"))
const Entire = React.lazy(() => import("@/views/entire/Entire"))


const routes = [
    {
        path: "/",
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: "/home",
        element: <Home></Home>
    },
    {
        path: "/detail",
        element: <Detail></Detail>
    },
    {
        path: "/entire",
        element: <Entire></Entire>
    }
]

export default routes