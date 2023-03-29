/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 13:47:53
 * @LastEditTime: 2023-03-28 14:07:10
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\components\section-footer\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";

export const SectionFooterStyled = styled.div`
    margin-top:10px;
    display: flex;

    .info{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 17px;
        font-weight: 700;
        color: ${props => props.color};
        
        &:hover{
            text-decoration: underline
        }

        .text{
            margin-right: 6px
        }

        img{
            width: 12px;
        }
    }
`