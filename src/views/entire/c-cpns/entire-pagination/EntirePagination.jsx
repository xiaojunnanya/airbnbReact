/*
 * @Author: 肖俊男
 * @Date: 2023-03-29 08:17:41
 * @LastEditTime: 2023-03-29 11:21:29
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\entire\c-cpns\entire-pagination\EntirePagination.jsx
 * 前端实习生：鲸落
 */

import React, { memo } from 'react'
import { EntirePaginationStyled } from './style'
import Pagination from '@mui/material/Pagination'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo((props) => {

  const { currentPage, totalCount, roomList } = useSelector(state =>({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList,
  }),shallowEqual)

  const dispatch = useDispatch()
  //事件处理
  function pageChangeHandle(event, count){
    // 换页的时候回到顶部
    window.scrollTo(0,0)
    //更新页码：redux => currentPage
    dispatch(changeCurrentPageAction(count - 1))
    // 重新获取数据
    dispatch(fetchRoomListAction())
  }

  return (
    <EntirePaginationStyled>
      {/* roomList没有值不展示 */}
       {
        !!roomList.length && (
          <div className="info">
            <Pagination count={ Math.ceil(totalCount/20) } onChange={pageChangeHandle}></Pagination>
            <div className="desc">
              第 { currentPage*20+1 } - { (currentPage + 1) *20 } 个房源，共超过{totalCount}个
            </div>
        </div>
        )
       }
    </EntirePaginationStyled>
  )
})


export default EntirePagination