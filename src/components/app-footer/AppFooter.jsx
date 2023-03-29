/*
 * @Author: 肖俊男
 * @Date: 2023-03-27 14:15:47
 * @LastEditTime: 2023-03-27 18:59:42
 * @LastEditors: 肖俊男
 * @Description: 底部
 * @FilePath: \airbnb\src\components\app-footer\AppFooter.jsx
 * 前端实习生：鲸落
 */
import React, { memo } from 'react'
import { AppFooterStyled } from './style'
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <AppFooterStyled>
      <div className='wrapper'>
        <div className='service'>
          {
            footerData.map(item => {
              return (
                <div className='item' key={item.name}>
                  <div className='name'>{item.name}</div>
                  <div className='list'>
                    {
                      item.list.map(iten => {
                        return <div className='iten' key={iten}>{iten}</div>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='statement'>© 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 123011</div>
        <div className='other'>ICP主体备案号：冀ICP备2022027806号</div>
      </div>
    </AppFooterStyled>
  )
})

export default AppFooter