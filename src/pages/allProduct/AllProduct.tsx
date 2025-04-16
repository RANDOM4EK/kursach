import React from "react";
import style from "./AllProduct.module.css";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";

export default function AllProduct() {
  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <h1></h1>
        <div className={style.filter}>
          <p>Price</p>
          <input type="number" placeholder="from" />
          <input type="number" placeholder="to" />
          <p>Discounted items</p>
          <input type="checkbox" />
          <p>Sorted</p>
          <input type="text" placeholder="by default" />
        </div>
        <div className={style.products}>
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
            <div className={style.discount3}>
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
            <div className={style.discount4}>
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
            <div className={style.discount5}>
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
            <div className={style.discount6}>
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
            <div className={style.discount7}>
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
            <div className={style.discount8}>
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
            <div className={style.discount9}>
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
            <div className={style.discount10}>
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
            <div className={style.discount11}>
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
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
