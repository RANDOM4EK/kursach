import React from 'react'
import style from './Categories.module.css'
import img1 from "../../../assets/img (1).png"
import img2 from "../../../assets/img (2).png"
import img3 from "../../../assets/img (3).png"
import img4 from "../../../assets/img (4).png"

export default function Categories() {
  return (
    <div className={style.container}>
      <h1>Categories</h1>
      <div className={style.cardCollection}>
        <div className={style.card}><img className={style.cardImg} src={img1} alt="" /><p>Fertilizer</p></div>
        <div className={style.card}><img className={style.cardImg}  src={img2} alt="" /><p>Protective products and septic tanks</p></div>
        <div className={style.card}><img className={style.cardImg}  src={img3} alt="" /><p>Planting material</p></div>
        <div className={style.card}><img className={style.cardImg}  src={img4} alt="" /><p>Tools and equipment</p></div>      
      </div>
    </div>
  )
}
