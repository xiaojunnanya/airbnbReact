/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 19:04:32
 * @LastEditTime: 2023-03-28 19:55:34
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\services\modules\home.js
 * 前端实习生：鲸落
 */

import XJNRequest from "..";

export function getHomeGoodPriceData(){
    return XJNRequest.get({
        url:"/home/goodprice"
    })
}


export function getHomeHighScoreData(){
    return XJNRequest.get({
        url: "/home/highscore"
    })
}


export function getHomeDiscountData(){
    return XJNRequest.get({
        url: "/home/discount"
    })
}

export function getHomeHotRecommendDate(){
    return XJNRequest.get({
        url: "/home/hotrecommenddest"
    })
}


export function getHomeLongforData(){
    return XJNRequest.get({
        url: "/home/longfor"
    })
}


export function getHomePlusData() {
    return XJNRequest.get({
        url: "/home/plus"
    })
}