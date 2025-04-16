import React from 'react'
import img1 from '../../assets/img_pages_categories.png'
import img2 from '../../assets/img_pages_categories1.png'
import img3 from '../../assets/img_pages_categories2.png'
import img4 from '../../assets/img_pages_categories3.png'
import img5 from '../../assets/img_pages_categories4.png'
import style from './Categories.module.css'
import Header from '../../components/Home/Header/Header'
import Footer from '../../components/Home/Footer/Footer'

export default function Categories() {
  return (
    <>
        <Header></Header>
        <div className={style.container}>
            <h1>Categories</h1>
            <div className={style.categories}>
                <div className={style.category}>
                    <img src={img1} alt="" />
                    <p>Fertilizer</p>
                </div>
                <div className={style.category}>
                    <img src={img2} alt="" />
                    <p>Protective products and septic tanks</p>
                </div>
                <div className={style.category}>
                    <img src={img3} alt="" />
                    <p>Planting material</p>
                </div>
                <div className={style.category}>
                    <img src={img4} alt="" />
                    <p>Tools and equipment</p>
                </div>
                <div className={style.category}>
                    <img src={img5} alt="" />
                    <p>Pots and planters</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}
