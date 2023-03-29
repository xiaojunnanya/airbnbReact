/*
 * @Author: 肖俊男
 * @Date: 2023-03-29 08:18:02
 * @LastEditTime: 2023-03-29 14:14:52
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\entire\c-cpns\entire-rooms\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";


export const EntireRoomsStyled = styled.div`
    
    padding: 20px 40px;
    margin-top: 128px;
    position: relative;

    .title{
        font-size: 22px;
        font-weight: 700;
        color: #222;
        margin: 0 0 10px 10px;
    }

    .list{
        display: flex;
        flex-wrap: wrap;
    }

    .coverAll{
        position: absolute;
        left:0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color:rgba(255,255,255,.8)
    }
`