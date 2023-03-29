/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 18:31:30
 * @LastEditTime: 2023-03-26 18:38:41
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\home\c-cpns\home-banners\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";

import coverImg from "@/assets/img/cover_01.jpeg"

export const HomeBannersStyled = styled.div`
    background-image: url(${coverImg});
    background-position: center;
    background-size: cover;
    height: 529px;
`