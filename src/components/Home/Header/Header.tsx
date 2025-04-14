import React from 'react'
import style from './Heder.module.css'
import logo from "../../../assets/logo.png"
import icon from "../../../assets/icon.svg"
export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.logo}><img src={logo} alt="" /></div>
        <div className={style.navigation}>
            <span>Main Page</span>
            <span>Categories</span>
            <span>All products</span>
            <span>All sales</span>
        </div>
        <div className={style.purchases}><img src={icon} alt="" /></div>
    </header>
  )
}
