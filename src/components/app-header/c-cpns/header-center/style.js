/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 14:40:26
 * @LastEditTime: 2023-03-26 16:27:28
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\components\app-header\c-cpns\header-center\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";


export const HeaderCenterStyled = styled.div`
    .search-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        height: 48px;
        box-sizing: border-box;
        padding: 0 8px;
        border: 1px solid #ddd;
        border-radius: 24px;
        cursor: pointer;

        ${props => props.theme.mixin.boxShadow}

        .text{
            padding:0 16px;
            color: #222;
            font-weight:600;
        }

        .icon{
            background-color: ${props => props.theme.color.primaryColor};
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;

            img{
                width: 12px;
                height: 12px;
            }
        }
    }
`