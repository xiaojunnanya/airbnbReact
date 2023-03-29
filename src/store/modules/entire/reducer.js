/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 19:21:08
 * @LastEditTime: 2023-03-29 11:18:57
 * @LastEditors: 肖俊男
 * @Description: 定义初始化数据+如何操作
 * @FilePath: \airbnb\src\store\modules\entire\reducer.js
 * 前端实习生：鲸落
 */

import * as actionTypes from './constants'

const initialState = {
    currentPage: 0,//当前页码
    roomList: [], //当前页码的房间列表
    totalCount: 0, // 数据总个数

    isLoading: false,//控制蒙版层的显示与隐藏
}

function reducer(state = initialState, action){
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case actionTypes.CHANGE_ROOM_LIST:
            return { ...state, roomList: action.roomList }
        case actionTypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case actionTypes.CHANGE_ISLOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state;
    }
}

export default reducer