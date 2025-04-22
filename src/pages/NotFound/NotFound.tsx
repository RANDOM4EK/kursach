import React from "react";
import style from "./NotFound.module.css";
import imgError from "../../assets/mage-from-rawpixel-id-7607931-png 1.png";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <Header></Header>
    <div className={style.container}>
      <div className={style.error}>
        <p>4</p>
        <img src={imgError} alt="" />
        <p>4</p>
      </div>
      <div className={style.text}>
        <h1>Page Not Found</h1>
        <p>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
      </div>
      <div className={style.button}>
        <button><Link to="/">Go Home</Link></button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
