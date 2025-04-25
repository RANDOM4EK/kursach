import { useContext } from "react";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import style from "./Basket.module.css";
import { BasketContext } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";

export default function Basket() {
  const basketContext = useContext(BasketContext);

  if (!basketContext) {
    throw new Error("BasketContext is null. Ensure it is provided in the component tree.");
  }

  const { basket, removeFromBasket } = basketContext;
  const navigate = useNavigate();

  const totalPrice = basket.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        (item.isDiscounted ? item.price - item.price * item.discount : item.price),
    0
  );

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.firsH1}>Shopping cart</h1>
        {basket.length === 0 ? (
          <>
            <p>Looks like you have no items in your basket currently.</p>
            <button
              className={style.startShopping}
              onClick={() => navigate(`/All_Product`)}
            >
              Continue Shopping
            </button>
          </>
        ) : (
          <div>
            {basket.map((item) => (
              <div key={item.id} className={style.basketItem}>
                <img src={item.img} alt={item.title} className={style.itemImage} />
                <div>
                  <h2>{item.title}</h2>
                  <p>Price: ${item.price}</p>
                  {item.isDiscounted && (
                    <p>Discounted Price: ${Math.round(item.price - item.price * item.discount)}</p>
                  )}
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Total: $
                    {item.quantity *
                      (item.isDiscounted
                        ? Math.round(item.price - item.price * item.discount)
                        : item.price)}
                  </p>
                </div>
                <button
                  className={style.removeButton}
                  onClick={() => removeFromBasket(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <p className={style.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
