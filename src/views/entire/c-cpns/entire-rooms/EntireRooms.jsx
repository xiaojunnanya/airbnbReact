/*
 * @Author: 肖俊男
 * @Date: 2023-03-29 08:17:57
 * @LastEditTime: 2023-03-29 11:21:41
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\entire\c-cpns\entire-rooms\EntireRooms.jsx
 * 前端实习生：鲸落
 */
import RoomItem from '@/components/room-item/RoomItem'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { EntireRoomsStyled } from './style'

const EntireRooms = memo((props) => {

  //从entire/store中获取请求的数据
  const { roomList, totalCount, isLoading } = useSelector(state =>({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }), shallowEqual)

  return (
    <EntireRoomsStyled>
      {
        !!roomList.length && (
          <div>
            <div className="title">共{totalCount}间住宿</div>
            <div className="list">
              {
                roomList.map(item =>{
                  return (
                    <RoomItem itemData={item} itemWidth="20%" key={item._id}></RoomItem>
                  )
                })
              }
            </div>

              {/* 蒙版遮盖层 */}
            {
              isLoading && (
                <div className="coverAll"></div>
              )
            }
          </div>
        )
      }
    </EntireRoomsStyled>
  )
})


export default EntireRooms