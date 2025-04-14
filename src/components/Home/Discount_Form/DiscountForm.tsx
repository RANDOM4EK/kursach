import React from 'react'
import style from './DiscountForm.module.css'
import imageForm from '../../../assets/imageForm.png'
export default function DiscountForm() {
  return (
    <div className={style.container}>
      <div className={style.h1InForm}><h1>5% off on the first order</h1></div>
      <div className={style.form}>
        <div><img src={imageForm} alt="" /></div>
        <div className={style.formContainer}>
          <form className={style.formFirstOrder}action="">
            <input className={style.formInput} type="text" placeholder='Name'/>
            <input className={style.formInput} type="number" placeholder='Phone number'/>
            <input className={style.formInput} type="text" placeholder='Email'/>
            <button className={style.battonForm}>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  )
}
