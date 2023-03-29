/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 19:36:12
 * @LastEditTime: 2023-03-27 19:00:51
 * @LastEditors: 肖俊男
 * @Description: 每一个大标签区域的标题和副标签
 * @FilePath: \airbnb\src\components\section-header\SectionHeader.jsx
 * 前端实习生：鲸落
 */

//类型验证
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeaderStyled } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props


  return (
    <SectionHeaderStyled>
        <div className="title">
            <h2>{title}</h2>
        </div>
        <div className="subtitle">
            { subtitle && <div>{subtitle}</div> }
        </div>
    </SectionHeaderStyled>
  )
})

SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SectionHeader