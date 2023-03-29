/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 19:35:42
 * @LastEditTime: 2023-03-28 19:46:31
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\components\longfor-item\LongforItem.jsx
 * 前端实习生：鲸落
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforItemStyled } from './style'

const LongforItem = memo((props) => {

    const { itemData } = props

  return (
    <LongforItemStyled>
        <div className="inner">
            <img className="cover" src={itemData.picture_url} alt="" />
            <div className="bg-cover"></div>
            <div className="info">
                <div className="city">{itemData.city}</div>
                <div className="price">均价 {itemData.price}</div>
            </div>
        </div>
    </LongforItemStyled>
  )
})

LongforItem.propTypes = {
    itemData: PropTypes.object
}

export default LongforItem