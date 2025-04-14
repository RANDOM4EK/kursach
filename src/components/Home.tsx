import React from 'react'
import style from "./Home.module.css"
import Header from './Home/Header/Header'
import Head from './Home/Head/Head'
import Categories from './Home/Categories/Categories'
import DiscountForm from './Home/Discount_Form/DiscountForm'
import Sales from './Home/Sales/Sales'
import Footer from './Home/Footer/Footer'
export default function Home() {
  return (
    <>
        <Header/>
        <Head/>
        <Categories/>
        <DiscountForm/>
        <Sales/>
        <Footer/>
    </>
    
  )
}
