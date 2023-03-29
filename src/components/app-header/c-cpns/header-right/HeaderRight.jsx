/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 14:38:24
 * @LastEditTime: 2023-03-26 17:15:49
 * @LastEditors: 肖俊男
 * @Description: 头部右边的样式
 * @FilePath: \airbnb\src\components\app-header\c-cpns\header-right\HeaderRight.jsx
 * 前端实习生：鲸落
 */
import React, { memo, useEffect, useState } from 'react'
import { HeaderRightStyled } from './style'

import menu from '@/assets/svg/menu.svg';
import profile from '@/assets/svg/profile.svg';

const HeaderRight = memo(() => {

  // 组件状态
  const [ showPanel, setShowPanel ] = useState(false)

  //点击窗口的时候，将panel隐藏,且仅执行一次
  useEffect(()=>{
    function windowHandleClick(){
      setShowPanel(false)
    }

    window.addEventListener("click", windowHandleClick, true)  // 设置为true，是将冒泡改为捕获

    //取消监听
    return ()=>{
      window.removeEventListener("click", windowHandleClick, true)
    }
  },[])

  // 点击panel，模块的展示与隐藏
  function setShowPanelFoo(){
    console.log("2");
    setShowPanel(!showPanel)
  }

  return (
    <HeaderRightStyled>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>图标</span>
      </div>
      <div className="profile" onClick={setShowPanelFoo}>
        <img src={menu} alt=""></img>
        <img src={profile} alt=""></img>

        { 
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">注册</div>
                <div className="item login">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }

      </div>
    </HeaderRightStyled>
  )
})

export default HeaderRight