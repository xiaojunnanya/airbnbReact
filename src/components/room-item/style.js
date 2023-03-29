/*
 * @Author: 肖俊男
 * @Date: 2023-03-27 14:28:00
 * @LastEditTime: 2023-03-29 11:23:54
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\components\room-item\style.js
 * 前端实习生：鲸落
 */

import styled from "styled-components";


export const RoomItemStyled = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  cursor: pointer;
  width: ${props => props.itemWidth};
  /* width: 25%; */
  padding: 8px;
  /* margin: 8px 0; */

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${ props => props.verifyColor };
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-icon {
      margin-right: -2px;
    }
  }
`
