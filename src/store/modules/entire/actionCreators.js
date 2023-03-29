/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 19:21:18
 * @LastEditTime: 2023-03-29 11:18:21
 * @LastEditors: 肖俊男
 * @Description: 定义操作方法
 * @FilePath: \airbnb\src\store\modules\entire\actionCreators.js
 * 前端实习生：鲸落
 */

import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) =>({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) =>({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount) =>({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsloadingAction = (isLoading) =>({
    type: actionTypes.CHANGE_ISLOADING,
    isLoading
})


//请求数据
export const fetchRoomListAction = () =>{
    //返回新的函数
    return async (dispatch, getState)=>{
        const currentPage = getState().entire.currentPage

        //发生网络请求之前，将isloading改成true
        dispatch(changeIsloadingAction(true))

        const res = await getEntireRoomList(currentPage * 20);

        //发生网络请求之后，将isloading改成false
        dispatch(changeIsloadingAction(false))
        
        //获取最新的数据保存到redux
        dispatch(changeRoomListAction(res.list))
        dispatch(changeTotalCountAction(res.totalCount))
    }
}