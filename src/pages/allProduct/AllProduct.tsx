import { useState } from "react";
import style from "./AllProduct.module.css";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import obj from "../../productsObj/ProductsObj.json";

export default function AllProduct() {
  const [minPrice, setMinPrice] = useState(Number);
  const [maxPrice, setMaxPrice] = useState(Number);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const filteredProducts = obj.filter((item) => {
    const isWithinPriceRange =
      (!minPrice || item.price >= minPrice) &&
      (!maxPrice || item.price <= maxPrice);
    const isDiscountedMatch = showDiscounted ? item.isDiscounted : true;
    return isWithinPriceRange && isDiscountedMatch;
  });

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Tools and equipment</h1>
        <div className={style.filter}>
          <p>Price</p>
          <input
            type="number"
            placeholder="от"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="до"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <p>Discounted items</p>
          <input
            type="checkbox"
            checked={showDiscounted}
            onChange={(e) => setShowDiscounted(e.target.checked)}
          />
        </div>
        <div className={style.products}>
          {filteredProducts.map((item) => (
            <div key={item.id} className={style.item}>
              <div className={style.item}>
                
                <div
                  className={`flex flex-row-reverse bg-no-repeat bg-top-center w-[316px] h-[284px]`}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  {item.isDiscounted && (
                    <div className={style.discountContainer}><p className={style.discount}>{item.discount}%</p></div>
                  )}
                </div>
                <div className={style.itemText}>
                  <p>{item.title}</p>
                  <div className={style.itemPrice}>
                    <p>${item.price}</p>
                    {item.isDiscounted && (
                      <p className={style.itemPriceDiscount}>
                        ${item.priceDiscounted}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
