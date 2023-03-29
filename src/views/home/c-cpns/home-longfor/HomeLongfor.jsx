/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 19:27:00
 * @LastEditTime: 2023-03-28 19:52:56
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\home\c-cpns\home-longfor\HomeLongfor.jsx
 * 前端实习生：鲸落
 */
import ScrollView from '@/base-ui/scroll-view/ScrollView'
import LongforItem from '@/components/longfor-item/LongforItem'
import SectionHeader from '@/components/section-header/SectionHeader'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongforStyled } from './style'

const HomeLongfor = memo((props) => {

    const { infoData } = props

  return (
    <HomeLongforStyled>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <div className="longfor-list">
            <ScrollView>
                {
                    infoData.list.map((item, index) =>{
                        return <LongforItem itemData={item} key={index}></LongforItem>
                    })
                }
            </ScrollView>
        </div>
    </HomeLongforStyled>
  )
})

HomeLongfor.propTypes = {
    infoData: PropTypes.object
}

export default HomeLongfor