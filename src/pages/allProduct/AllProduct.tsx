import { useState } from "react";
import style from "./AllProduct.module.css";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import obj from "../../productsObj/ProductsObj.json";
import { useNavigate } from "react-router-dom";

export default function AllProduct() {
  const navigate = useNavigate();
  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
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
            value={minPrice ?? ""}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="до"
            value={maxPrice ?? ""}
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
              <div
                onClick={() => handleProductClick(item.id)}
                className={style.item}
              >
                <div
                  className={`flex flex-row-reverse bg-no-repeat bg-top-center w-[316px] h-[284px]`}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  {item.isDiscounted && (
                    <div className={style.discountContainer}>
                      <p className={style.discount}>{item.discount * -100}%</p>
                    </div>
                  )}
                </div>
                <div className={style.itemText}>
                  <p>{item.title}</p>
                  <div className={style.itemPrice}>
                    
                    {item.isDiscounted && (
                      <p className={style.itemPrice}>
                        {"$" + Math.round(item.price - item.price * item.discount)}
                      </p>
                    )}
                    <p
                      className={
                        item.isDiscounted
                          ? style.itemPriceDiscount
                          : style.itemPrice
                      }
                    >
                      {"$" + item.price}
                    </p>
                    
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
