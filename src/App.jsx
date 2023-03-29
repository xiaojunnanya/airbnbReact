/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 16:16:20
 * @LastEditTime: 2023-03-29 14:30:25
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\App.jsx
 * 前端实习生：鲸落
 */
import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router/index'



//组件引用
import AppFooter from './components/app-footer/AppFooter'
import AppHeader from './components/app-header/AppHeader'


const App = memo(() => {

  //配置当页面发生跳转的时候，跳转到页面顶部
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location.pathname])

  return (
    <div>
      <AppHeader></AppHeader>
      <div className="page">
        { useRoutes(routes) }
      </div>
      
      <AppFooter></AppFooter>
    </div>
  )
})

export default App
