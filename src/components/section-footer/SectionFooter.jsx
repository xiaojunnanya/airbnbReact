/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 13:47:47
 * @LastEditTime: 2023-03-28 20:36:47
 * @LastEditors: 肖俊男
 * @Description: 查看房源
 * @FilePath: \airbnb\src\components\section-footer\SectionFooter.jsx
 * 前端实习生：鲸落
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterStyled } from './style'

import IconMoreArrow from "@/assets/svg/arrow-right.svg"
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {

    const { name } = props
    
    let showName = null
    if(name){
        showName = `查看更多${name}房源`
    }else{
        showName = '显示更多'
    }

    // 跳转到详情页面
    const navigate = useNavigate()
    function moreClickHandle(){
        navigate("/entire")
    }

  return (
    <SectionFooterStyled color={ name && "#00848a"}>
        <div className="info" onClick={moreClickHandle}>
            <div className="text">{showName}</div>
            <img src={IconMoreArrow} alt="" />
        </div>
    </SectionFooterStyled>
  )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter