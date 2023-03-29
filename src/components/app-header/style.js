/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 14:33:21
 * @LastEditTime: 2023-03-29 14:10:59
 * @LastEditors: 肖俊男
 * @Description: AppHeader组件的样式
 * @FilePath: \airbnb\src\components\app-header\style.js
 * 前端实习生：鲸落
 */


import styled from "styled-components";

export const AppHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #eee;
    background-color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 100;
`