import React from "react";
import style from "./Footer.module.css";
import iconInstagram from "../../../assets/ic-instagram.png";
import iconWhatApp from "../../../assets/ic-whatsapp.png";
import map from "../../../assets/map.png";

export default function Footer() {
  return (
    <div className={style.container}>
      <h1></h1>
      <div className={style.items}>
        <div className={style.item}>
            <p className={style.text1}>Phone</p>
            <p className={style.text2}>+7 (499) 350-66-04</p>
        </div>
        <div className={style.item2}>
          <p className={style.text1}>Socials</p>
          <img src={iconInstagram} alt="" />
          <img src={iconWhatApp} alt="" />
        </div>
      </div>
      <div className={style.items}>
        <div className={style.item}>
          <p className={style.text1}>Address</p>
          <p className={style.text2}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
        </div>
        <div className={style.item2}>
          <p className={style.text1}>Working Hours</p>
          <p className={style.text2}>24 hours a day</p>
        </div>
      </div>
        <img  className={style.map} src={map} alt="" />
    </div>
  );
}
