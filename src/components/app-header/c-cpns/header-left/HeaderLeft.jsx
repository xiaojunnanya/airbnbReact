/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 14:38:11
 * @LastEditTime: 2023-03-29 11:22:31
 * @LastEditors: 肖俊男
 * @Description: 头部左边的样式
 * @FilePath: \airbnb\src\components\app-header\c-cpns\header-left\HeaderLeft.jsx
 * 前端实习生：鲸落
 */
import React, { memo } from 'react'
import { HeaderLeftStyled } from './style'

import logo from '@/assets/svg/logo.svg';
import { useNavigate } from 'react-router-dom';

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function clickHome(){
    navigate("/home")
  }

  return (
    <HeaderLeftStyled>
      <div className='logo'>
        <img src={logo} onClick={clickHome} alt='logo'></img>
      </div>
    </HeaderLeftStyled>
  )
})

export default HeaderLeft