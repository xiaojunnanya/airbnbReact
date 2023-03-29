/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 08:04:17
 * @LastEditTime: 2023-03-28 19:00:25
 * @LastEditors: 肖俊男
 * @Description: 封装选项卡
 * @FilePath: \airbnb\src\components\section-tabs\SectionTabs.jsx
 * 前端实习生：鲸落
 */
import ScrollView from '@/base-ui/scroll-view/ScrollView'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsStyled } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props

  //纪录选中状态，动态设置class
  const [ currentIndex, setCurrentIndex ] = useState(0)
  
  //点击操作函数
  function itemClickHandle(index, item){
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <SectionTabsStyled>
        <ScrollView>
          {
            tabNames.map((item, index) =>{
              return <div
                          className={classNames("item", { 'active' : currentIndex === index })}
                          key={index}
                          onClick={()=>{ itemClickHandle(index, item) }}
                      >{item}</div>
            })
          }
        </ScrollView>
    </SectionTabsStyled>
  )
})

SectionTabs.propTypes = {
    tabNames:PropTypes.array
}

export default SectionTabs