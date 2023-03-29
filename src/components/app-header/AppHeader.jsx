/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 14:27:46
 * @LastEditTime: 2023-03-29 14:46:54
 * @LastEditors: 肖俊男
 * @Description: 头部，图标、搜索、登录什么的
 * @FilePath: \airbnb\src\components\app-header\AppHeader.jsx
 * 前端实习生：鲸落
 */
import React, { memo } from 'react'
import { AppHeaderStyled } from './style'

//组件引用
import HeaderCenter from './c-cpns/header-center/HeaderCenter'
import HeaderLeft from './c-cpns/header-left/HeaderLeft'
import HeaderRight from './c-cpns/header-right/HeaderRight'

const AppHeader = memo(() => {
  return (
    <AppHeaderStyled>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </AppHeaderStyled>
  )
})

export default AppHeader