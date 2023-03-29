/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 19:34:30
 * @LastEditTime: 2023-03-25 20:20:46
 * @LastEditors: 肖俊男
 * @Description: 对axios的封装
 * @FilePath: \airbnb\src\services\request\index.js
 * 前端实习生：鲸落
 */

import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

class XJNRequest{
    // baseUrl
    // timeout:超时时间
    constructor(baseURL, timeout){
        this.instance = axios.create({
            baseURL, timeout
        })

        //响应拦截器
        this.instance.interceptors.response.use((res) =>{
            return res.data
        }, err =>{
            return err
        })

        
    }

    request(config){
        return this.instance.request(config)
    }

    get(config){
        return this.request({ ...config, method:"GET" })
    }

    post(config){
        return this.request({ ...config, method:"POST" })
    }

}


export default new XJNRequest(BASE_URL, TIMEOUT)
