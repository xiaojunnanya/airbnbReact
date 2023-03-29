/*
 * @Author: 肖俊男
 * @Date: 2023-03-27 17:07:02
 * @LastEditTime: 2023-03-27 19:13:08
 * @LastEditors: 肖俊男
 * @Description: 每一个大标签区域，将多个小标签进行整合展示
 * @FilePath: \airbnb\src\components\section-rooms\SectionRooms.jsx
 * 前端实习生：鲸落
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsStyled } from './style'

import RoomItem from '@/components/room-item/RoomItem'

const SectionRooms = memo((props) => {

    const { roomList, itemWidth } = props

  return (
    <SectionRoomsStyled>
        <ul className='room-list'>
          {
            roomList?.slice(1,9).map((item) =>{
              // return <li key={item.id}>{item.name}</li>
              return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}></RoomItem>
            })
          }
        </ul>
    </SectionRoomsStyled>
  )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms