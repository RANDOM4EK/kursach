import  { useState } from 'react'
import style from './DiscountForm.module.css'
import imageForm from '../../../assets/imageForm.png'
export default function DiscountForm() {
    const [userData, setUserData] = useState({
      name: localStorage.getItem("userName") || "",
      phone: localStorage.getItem("userPhone") || "",
      email: localStorage.getItem("userEmail") || ""
    });
  return (
    <div className={style.container}>
      <div className={style.h1InForm}><h1>5% off on the first order</h1></div>
      <div className={style.form}>
        <img src={imageForm} alt="" />
        <div className={style.formContainer}>
          <form className={style.formFirstOrder}action="">
            <input className={style.formInput} type="text" placeholder='Name' value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            <input className={style.formInput} type="text" placeholder='phone'value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
            <input className={style.formInput} type="text" placeholder='Email'value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <button className={style.battonForm}>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  )
}
