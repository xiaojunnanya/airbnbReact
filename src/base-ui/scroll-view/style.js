import styled from "styled-components";

/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 14:20:22
 * @LastEditTime: 2023-03-28 19:16:36
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\base-ui\scroll-view\style.js
 * 前端实习生：鲸落
 */
export const ScrollViewStyled = styled.div`
    position: relative;
    padding: 8px 0;

    .scroll{
        overflow: hidden;
        .scroll-content{
            display: flex;
            transition: transform 250ms ease;
        }
    }
    

    .control {
        position: absolute;
        z-index: 9;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        text-align: center;
        border-width: 2px;
        border-style: solid;
        border-color: #fff;
        background: #fff;
        box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
        cursor: pointer;

        &.left {
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        }

        &.right {
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
        }
    }
`