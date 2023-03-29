/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 08:04:45
 * @LastEditTime: 2023-03-28 14:35:24
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\components\section-tabs\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";

export const SectionTabsStyled = styled.div`
    .item{
        box-sizing: border-box;
        flex-shrink:0;
        flex-basis: 120px;
        /* min-width: 120px; */
        padding: 14px 16px;
        margin-right:16px;
        border-radius:3px;
        font-size: 17px;
        text-align:center;
        border: 0.5px solid #d8d8d8;
        white-space: nowrap;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow};

        &:last-child{
            margin-right: 0;
        }
    }

    .active{
        background-color: ${props => props.theme.color.secondColor};
        color: #fff;
    }
`
