import React from 'react'
import style from './list.css'

export default function List() {
  return (
    <div className={style.list}>
      <p className={style.item}>我是一行信息</p>
      <p className={style.item}>我是一行信息</p>
      <p className={style.item}>我是一行信息</p>
    </div>

  )
}
