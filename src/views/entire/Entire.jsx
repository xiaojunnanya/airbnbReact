/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 17:46:20
 * @LastEditTime: 2023-03-29 09:57:34
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\entire\Entire.jsx
 * 前端实习生：鲸落
 */
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter/EntireFilter'
import EntirePagination from './c-cpns/entire-pagination/EntirePagination'
import EntireRooms from './c-cpns/entire-rooms/EntireRooms'
import { EntireStyled } from './style'

const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomListAction())
  },[dispatch])

  return (
    <EntireStyled>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireStyled>
  )
})

export default Entire