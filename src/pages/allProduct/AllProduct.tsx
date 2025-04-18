import React from "react";
import style from "./AllProduct.module.css";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import obj from "../../productsObj/ProductsObj.json";

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
        {obj.map((item) => {
        return (
          <div key={item.id} className={style.item}>
            <div className={style.item}>
              <div className={`flex flex-row-reverse bg-no-repeat bg-top-center w-[316px] h-[284px]`}
              style={{ backgroundImage: `url(${item.img})` }}>
                <p className={style.discount}>{item.discount}%</p>
              </div>
              <div className={style.itemText}>
                <p>{item.title}</p>
                <div className={style.itemPrice}>
                  <p>${item.price}</p>
                  <p className={style.itemPriceDiscount}>${item.priceDiscounted}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
