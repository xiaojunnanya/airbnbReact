/*
 * @Author: 肖俊男
 * @Date: 2023-03-29 09:47:09
 * @LastEditTime: 2023-03-29 09:59:17
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\services\modules\entire.js
 * 前端实习生：鲸落
 */

import XJNRequest from "..";

export function getEntireRoomList(offset = 0, size = 20){
    return XJNRequest.get({
        url: "entire/list",
        params: {
            offset,
            size
        }
    })
}
