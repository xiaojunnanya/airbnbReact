/*
 * @Author: 肖俊男
 * @Date: 2023-03-28 14:20:15
 * @LastEditTime: 2023-03-28 19:16:04
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\base-ui\scroll-view\ScrollView.jsx
 * 前端实习生：鲸落
 */
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewStyled } from './style'

const ScrollView = memo((props) => {

    const { children } = props

    const [ showRight, setShowRight ] = useState(false)//纪录右边按钮的显示与隐藏,当展示的宽度大于的时候，才显示
    const [ showLeft, setShowLeft ] = useState(false)//纪录左边按钮的显示与隐藏
    const [ posIndex, setPosIndex ] = useState(0)  // 定义偏移个数

    const scrollContentRef = useRef()

    // 当组件渲染完毕的时候，判断是否显示 
    const totalDistanceRef = useRef()
    useEffect(()=>{
        const scrollWidth = scrollContentRef.current.scrollWidth    //可滚动宽度
        const clientWidth = scrollContentRef.current.clientWidth    //本身占据宽度
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight( totalDistance > 0)
    },[children])

    //左边按钮
    function controlClickHandle(isRight){
        const newIndex = isRight ? (posIndex + 1) : (posIndex - 1)
        const newEl = scrollContentRef.current.children[newIndex]
        scrollContentRef.current.style.transform = `translateX(-${newEl.offsetLeft}px)`
        setPosIndex(newIndex) // 纪录新值
        //滚动后需要判断是否继续显示这个按钮
        setShowRight( totalDistanceRef.current > newEl.offsetLeft )
        setShowLeft( newEl.offsetLeft > 0 )
    }

  return (
    <ScrollViewStyled>
        
        { 
            showLeft && (
                <div onClick={()=>{controlClickHandle(false)}} className="control left">
                    <IconArrowLeft></IconArrowLeft>
                </div>
            ) 
        }
        { 
            showRight && (
                <div onClick={()=>{controlClickHandle(true)}} className="control right">
                    <IconArrowRight></IconArrowRight>
                </div>
            ) 
        }

        <div className="scroll">
            <div className="scroll-content" ref={scrollContentRef}>
                { children }
            </div>
        </div>
    </ScrollViewStyled>
  )
})

ScrollView.propTypes = {}

export default ScrollView