import React from 'react'
import style from './Heder.module.css'
import logo from "../../../assets/logo.png"
import icon from "../../../assets/icon.svg"
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.logo}><img src={logo} alt="" /></div>
        <div className={style.navigation}>
            <span> <Link to="/">Main Page</Link></span>
            <span> <Link to="/Categories">Categories</Link></span>
            <span><Link to="/All_Product">All products</Link></span>
            <span>All sales</span>
        </div>
        <div className={style.purchases}><img src={icon} alt="" /></div>
    </header>
  )
}
