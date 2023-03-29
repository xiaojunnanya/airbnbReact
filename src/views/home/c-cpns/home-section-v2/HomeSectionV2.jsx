/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 08:55:59
 * @LastEditTime: 2023-03-28 15:28:24
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\home\c-cpns\home-section-v2\HomeSectionV2.jsx
 * 前端实习生：鲸落
 */
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { HomeSectionV2Styled } from './style'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRooms from '@/components/section-rooms/SectionRooms'
import SectionTabs from '@/components/section-tabs/SectionTabs'
import SectionFooter from '@/components/section-footer/SectionFooter'

const HomeSectionV2 = memo((props) => {

    const { infoData } = props

    //从服务器取到的数据，进行一个转换，取到标题的name
    const tabNames = infoData?.dest_address?.map(item => item.name)

    //去数组的第一个key值作为初始化
    const firstKey = Object.keys(infoData.dest_list)[0]
    const [ name, setName ] = useState(firstKey)
    //定义一个函数，这个函数的作用是：SectionTabs组件调用这个函数
    //拿到用户选择的城市，将这个城市传给SectionRooms
    const tabClickHandle = useCallback(function(index, name){
        setName(name)
    },[])

  return (
    <HomeSectionV2Styled>
        <div className="discount">
          <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
          <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth={"33.33%"}></SectionRooms>
          <SectionFooter name={name}></SectionFooter>
        </div>
    </HomeSectionV2Styled>
  )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2