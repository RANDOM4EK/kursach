import React from "react";
import style from "./Head.module.css";
export default function Head() {
  return (
    <div className={style.head}>
      <div className={style.container}>
        <p className={style.pInHead}>Amazing Discounts on Garden Products!</p>
        <button className={style.headButton}>Check out</button>
      </div>
    </div>
  );
}
