/*
 * @Author: 肖俊男
 * @Date: 2023-03-29 08:17:22
 * @LastEditTime: 2023-03-29 14:13:32
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\entire\c-cpns\entire-filter\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";
export const EntireFilterStyled = styled.div`

    position: fixed;
    left: 0;
    right: 0;
    top: 80px;

    display: flex;
    align-items:center;
    height: 48px;
    padding-left: 16px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    z-index:100;

    .filter{
        display: flex;

        .item{
            margin: 0 4px 0 8px;
            padding: 6px 12px;
            border: 1px solid #dce0e0;
            border-radius: 4px;
            color: #484848;
            cursor: pointer;

            &.active{
                background-color: #008489;
                border: 1px solid #008489;
                color: #fff;
            }
        }
    }
`