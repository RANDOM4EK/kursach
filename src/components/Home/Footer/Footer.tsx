import React from "react";
import style from "./Footer.module.css";
import iconInstagram from "../../../assets/ic-instagram.png";
import iconWhatApp from "../../../assets/ic-whatsapp.png";

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
          <div className="flex flex-row gap-2">
            <img src={iconInstagram} alt="Instagram" />
            <img src={iconWhatApp} alt="WhatsApp" />
          </div>
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

      <iframe
        className={style.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.0491719266713!2d37.62553717677454!3d55.717887273160814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab54d92f5ae4b%3A0x78be92a168bfe525!2sDubininskaya%20Ulitsa%2C%2096%2C%20Moscow%2C%20Russia%2C%20115093!5e0!3m2!1sen!2sru!4v1715640000000"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
