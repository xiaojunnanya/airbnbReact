/*
 * @Author: 肖俊男
 * @Date: 2023-03-27 14:27:55
 * @LastEditTime: 2023-03-29 11:34:16
 * @LastEditors: 肖俊男
 * @Description: 每一个小标签区域
 * @FilePath: \airbnb\src\components\room-item\RoomItem.jsx
 * 前端实习生：鲸落
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemStyled } from './style'

//mui
import Rating from '@mui/material/Rating';

const RoomItem = memo((props) => {

  const { itemData, itemWidth = "25%" } = props

  return (
    <RoomItemStyled
        verifyColor={ itemData?.verify_info?.text_color || '#39576a' }
        itemWidth={ itemWidth }
    >
        <div className="inner">
            <div className="cover">
                <img src={itemData.picture_url} alt="" />
            </div>
            <div className="desc">
                {itemData.verify_info.messages.join(" · ")}
            </div>
        </div>
        <div className="name">
            {itemData.name}
        </div>
        <div className="price">
            ￥{itemData.price}/晚
        </div>
        <div className="bottom">
            <Rating precision={0.5} value={itemData.star_rating ?? 4} readOnly sx={{ fontSize: "12px",color:"#008489" }}></Rating>
            <span className="count">{itemData?.reviews_count}</span>
            {
                itemData?.bottom_info?.content && <span className="extra"> · {itemData?.bottom_info?.content}</span>
            }
            
        </div>
    </RoomItemStyled>
  )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem