/*
 * @Author: 肖俊男
 * @Date: 2023-03-29 08:17:17
 * @LastEditTime: 2023-03-29 08:48:16
 * @LastEditors: 肖俊男
 * @Description: 
 * @FilePath: \airbnb\src\views\entire\c-cpns\entire-filter\EntireFilter.jsx
 * 前端实习生：鲸落
 */

import React, { memo, useState } from 'react'
import { EntireFilterStyled } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo((props) => {

  const [ selectItems, setSelectItems ] = useState([])

  function itemClick(item){
    //不要直接修改状态
    // setSelectItems(selectItems.push(item))
    let newItems = [ ...selectItems ]
    if(newItems.includes(item)){//移除操作
      newItems.splice(newItems.indexOf(item),1)
    }else{// 添加操作
      newItems.push(item)
    }
    setSelectItems(newItems)
  }


  return (
    <EntireFilterStyled>
      <div className="filter">
        {
          filterData.map((item, index) =>{
            return (
              <div
                key={item}
                className={ classNames("item", { "active" : selectItems.includes(item) && item !== '更多筛选条件' })}
                onClick={()=>{itemClick(item)}}
              >{item}</div>
            )
          })
        }
      </div>
    </EntireFilterStyled>
  )
})


export default EntireFilter