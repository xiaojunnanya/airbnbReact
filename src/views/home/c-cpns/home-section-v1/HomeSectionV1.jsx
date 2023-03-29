/*
 * @Author: 肖俊男
 * @Date: 2023-03-27 18:26:54
 * @LastEditTime: 2023-03-28 09:00:23
 * @LastEditors: 肖俊男
 * @Description: 将每一个大标签页面整合成一个组件
 * @FilePath: \airbnb\src\views\home\c-cpns\home-section-v1\HomeSectionV1.jsx
 * 前端实习生：鲸落
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Styled } from './style'

import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRooms from '@/components/section-rooms/SectionRooms'
import SectionFooter from '@/components/section-footer/SectionFooter'

const HomeSection = memo((props) => {

    const { infoData } = props

  return (
    <HomeSectionV1Styled>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <SectionRooms roomList={infoData?.list} itemWidth={"25%"}></SectionRooms>
        <SectionFooter></SectionFooter>
    </HomeSectionV1Styled>
  )
})

HomeSectionV1Styled.propTypes = {
    infoData: PropTypes.object
}

export default HomeSection