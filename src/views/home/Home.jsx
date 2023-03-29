/*
 * @Author: 肖俊男
 * @Date: 2023-03-25 17:46:12
 * @LastEditTime: 2023-03-29 10:46:46
 * @LastEditors: 肖俊男
 * @Description: Home页面
 * @FilePath: \airbnb\src\views\home\Home.jsx
 * 前端实习生：鲸落
 */

// 第三方UI
// import Button from '@mui/material/Button'

//第三方库
import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import HomeBanners from './c-cpns/home-banners/HomeBanners'
import { HomeStyled } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1/HomeSectionV1'
import HomeSectionV2 from './c-cpns/home-section-v2/HomeSectionV2'
import HomeSectionV3 from './c-cpns/home-section-v3/HomeSectionV3'
import HomeLongfor from './c-cpns/home-longfor/HomeLongfor'

const Home = memo(() => {

  //派发异步事件：发起网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  //从store中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state) =>({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  
  return (
    <HomeStyled>
      <HomeBanners></HomeBanners>
      <div className="content">
        {/* 有数据的时候在渲染,提高性能 */}

        {/* 折扣数据 */}
        { !!Object.keys(discountInfo).length && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2> }

        {/* 探索数据 */}
        { !!Object.keys(recommendInfo).length && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2> }

        {/* 你可能想去 */}
        { !!Object.keys(longforInfo).length && <HomeLongfor infoData={longforInfo}></HomeLongfor> }
        
        {/* 高性价比房源 */}
        { !!Object.keys(goodPriceInfo).length && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1> }
        
        {/* 高分好评 */}
        { !!Object.keys(highScoreInfo).length && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1> }

        {/* plus房源 */}
        { !!Object.keys(plusInfo).length && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3> }
      
      </div>
    </HomeStyled>
  )
})

export default Home