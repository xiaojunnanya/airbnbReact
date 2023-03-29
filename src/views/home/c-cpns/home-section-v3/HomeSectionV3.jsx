/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 20:14:58
 * @LastEditTime: 2023-03-28 20:32:35
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\home\c-cpns\home-section-v3\HomeSectionV3.jsx
 * 前端实习生：鲸落
 */
import ScrollView from '@/base-ui/scroll-view/ScrollView'
import RoomItem from '@/components/room-item/RoomItem'
import SectionFooter from '@/components/section-footer/SectionFooter'
import SectionHeader from '@/components/section-header/SectionHeader'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Styled } from './style'

const HomeSectionV3 = memo((props) => {

    const { infoData } = props

  return (
    <HomeSectionV3Styled>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <div className="room-list">
            <ScrollView>
                {
                    infoData.list.map((item, index) =>{
                        return <RoomItem itemData={item} itemWidth="20%" key={index}></RoomItem>
                    })
                }
            </ScrollView>
        </div>
        <SectionFooter name="plus"></SectionFooter>
    </HomeSectionV3Styled>
  )
})

HomeSectionV3.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV3