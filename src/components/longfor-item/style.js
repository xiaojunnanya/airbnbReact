import styled from "styled-components"

/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 19:35:53
 * @LastEditTime: 2023-03-28 19:35:55
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\components\longfor-item\style.js
 * 前端实习生：鲸落
 */
export const LongforItemStyled = styled.div`
  flex-shrink: 0;
  width: 20%;
  
  .inner {
    position: relative;
    padding: 8px;
  }

  .cover {
    width: 100%;
  }

  .bg-cover {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
  }

  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`