/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 14:38:33
 * @LastEditTime: 2023-03-29 14:46:33
 * @LastEditors: 肖俊男
 * @Description: 头部中间的样式
 * @FilePath: \airbnb\src\components\app-header\c-cpns\header-center\HeaderCenter.jsx
 * 前端实习生：鲸落
 */
import React, { memo } from 'react'
import { HeaderCenterStyled } from './style'

import search from '@/assets/svg/search.svg';

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterStyled>
      <div className="search-bar">
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <img src={search} alt="" />
        </div>
      </div>
    </HeaderCenterStyled>
  )
})

export default HeaderCenter