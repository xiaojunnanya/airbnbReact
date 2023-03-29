/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 14:40:35
 * @LastEditTime: 2023-03-29 10:22:14
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\components\app-header\c-cpns\header-right\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";

export const HeaderRightStyled = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.text.primaryColor};
    font-size: 14px;
    font-weight: 600;

    .btns{
        display: flex;

        span{
            display: flex;
            align-items:center;
            justify-content: center;
            height: 42px;
            width: 58px;
            cursor: pointer;

            &:hover{
                background-color: #F7F7F7;
                border-radius:20px;
            }
        }
    }

    .profile{
        position: relative;
        display: flex;
        align-items: center;
        width: 77px;
        height: 42px;
        justify-content: center;
        border-radius: 21px;
        border: 1px solid #ddd;
        margin-right: 24px;
        cursor: pointer;
        
        img:nth-child(1){
            width: 16px;
        }

        img:nth-child(2){
            width: 30px;
            margin-left: 12px;
        }

        ${props => props.theme.mixin.boxShadow}


        .panel{
            position: absolute;
            right: 0;
            top: 55px;
            width: 240px;
            /* height: 200px; */
            background-color: #fff;
            z-index: 100;
            box-shadow: 0 0 6px rgba(0, 0, 0, .18);
            border-radius: 10px;

            .top,.bottom{
                padding: 10px 0;

                .item{
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;

                    &:hover{
                        background-color: #f5f5f5;
                    }
                }
            }

            .top{
                border-bottom: 1px solid #ddd;
            }
        }
    }
`