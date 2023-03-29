/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 18:09:08
 * @LastEditTime: 2023-03-28 19:57:20
 * @LastEditors: 肖俊男
 * @Description: 采取@reduxjs/toolkit方式
 * @FilePath: \airbnb\src\store\modules\home.js
 * 前端实习生：鲸落
 */

import { 
    getHomeDiscountData,
    getHomeGoodPriceData,
    getHomeHighScoreData,
    getHomeHotRecommendDate,
    getHomeLongforData,
    getHomePlusData
} from "@/services"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// 为了相互的请求不受影响，我们使用promise，不使用async和await
export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", ( payload, { dispatch, getState } )=>{
    getHomeGoodPriceData().then((res)=>{
        dispatch(changeGoodPriceInfo(res))
    })
    getHomeHighScoreData().then( res =>{
        dispatch(changeHighScoreInfo(res))
    })
    getHomeDiscountData().then( res =>{
        dispatch(changeDiscountInfo(res))
    })
    getHomeHotRecommendDate().then( res =>{
        dispatch(changeRecommendInfo(res))
    })
    getHomeLongforData().then( res =>{
        dispatch(changeLongforInfo(res))
    })
    getHomePlusData().then(res =>{
        dispatch(changePlusInfo(res))
    })
})


const homeSlice = createSlice({
    name:"home",
    initialState:{
        goodPriceInfo: [],
        highScoreInfo: [],
        discountInfo: [],
        recommendInfo: [],
        longforInfo: [],
        plusInfo: []
    },
    reducers:{
        changeGoodPriceInfo(state, { payload }){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfo( state, { payload }){
            state.highScoreInfo = payload
        },
        changeDiscountInfo( state, { payload }){
            state.discountInfo = payload
        },
        changeRecommendInfo( state, { payload }){
            state.recommendInfo = payload
        },
        changeLongforInfo( state, { payload }){
            state.longforInfo = payload
        },
        changePlusInfo( state, { payload }){
            state.plusInfo = payload
        }
    },
    // extraReducers: {
    //     [fetchHomeDataAction.fulfilled](state, { payload }){
    //         state.goodPriceInfo = payload
    //     }
    // }
})


export const { 
    changeGoodPriceInfo,
    changeHighScoreInfo,
    changeDiscountInfo,
    changeRecommendInfo,
    changeLongforInfo,
    changePlusInfo
} = homeSlice.actions

export default homeSlice.reducer