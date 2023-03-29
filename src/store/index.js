/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 18:01:25
 * @LastEditTime: 2023-03-29 11:47:54
 * @LastEditors: 肖俊男
 * @Description: 仓库
 * @FilePath: \airbnb\src\store\index.js
 * 前端实习生：鲸落
 */


import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './modules/main'
import homeSlice from './modules/home'
import entireReducter from "./modules/entire/index"

const store =  configureStore({
    // 细致划分模块
    reducer:{
        home: homeSlice,
        entire: entireReducter,
        main: mainSlice
    }
})

export default store