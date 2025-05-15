import React from "react";
import style from "./Sales.module.css";

export default function Sales() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Sale</h2>
      </div>
      <div className={style.items}>
        <div className={style.item}>
          <div className={style.discount1}>
            <p>-50%</p>
          </div>
          <div className={style.itemText}>
            <p>Decorative forged bridge</p>
            <div className={style.itemPrice}>
              <p>$500</p>
              <p className={style.itemPriceDiscount}>$1000</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.discount2}>
            <p>-22%</p>
          </div>
          <div className={style.itemText}>
            <p>Decorative forged bridge</p>
            <div className={style.itemPrice}>
              <p>$99</p>
              <p className={style.itemPriceDiscount}>$150</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.discount3}>
            <p>-10%</p>
          </div>
          <div className={style.itemText}>
            <p>Decorative forged bridge</p>
            <div className={style.itemPrice}>
              <p>$150</p>
              <p className={style.itemPriceDiscount}>$200</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.discount4}>
            <p>-10%</p>
          </div>
          <div className={style.itemText}>
            <p>Decorative forged bridge</p>
            <div className={style.itemPrice}>
              <p>$199</p>
              <p className={style.itemPriceDiscount}>$240</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
