import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import style from "./Basket.module.css";
import { useNavigate } from "react-router-dom";
import useBasketStore from "../../store/Store";

export default function Basket() {
  const navigate = useNavigate();

  const { basket, removeFromBasket, updateQuantity } = useBasketStore();

  const incrementQuantity = (id: number) => {
    const item = basket.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decrementQuantity = (id: number) => {
    const currentItem = basket.find((item) => item.id === id);
    const currentQuantity = currentItem ? currentItem.quantity : 0;
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const totalPrice = basket.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        (item.isDiscounted
          ? item.price - item.price * item.discount
          : item.price),
    0
  );
  const totalQuantity = basket.reduce((sum, item) => sum + item.quantity, 0);

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
          <div className={style.basketItems}>
            <div className={style.basketItemsList}>
              {basket.map((item) => (
                <div key={item.id} className={style.basketItem}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={style.itemImage}
                  />
                  <div className={style.itemDetails}>
                    <h2>{item.title}</h2>

                    <div className={style.quantityControl}>
                      <button
                        className={style.increment}
                        onClick={() => decrementQuantity(item.id)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className={style.increment}
                        onClick={() => incrementQuantity(item.id)}
                      >
                        {" "}
                        +{" "}
                      </button>

                      {item.isDiscounted && (
                        <p className={style.itemPrice}>
                          {"$" +
                            Math.round(
                              item.price - item.price * item.discount
                            ) *
                              item.quantity}
                        </p>
                      )}
                      <p
                        className={
                          item.isDiscounted
                            ? style.itemPriceDiscount
                            : style.itemPrice
                        }
                      >
                        {"$" + item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    className={style.removeButton}
                    onClick={() => removeFromBasket(item.id)}
                  >
                    удалить
                  </button>
                </div>
              ))}
            </div>
            <div className={style.orderDetails}>
              <h2>Order details</h2>
              <p>{totalQuantity} items</p>
              <div className={style.totalPriceContainer}>
                <p>Total</p>
                <p className={style.totalPrice}>${totalPrice.toFixed(0)},00</p>
              </div>
              <form action="" className={style.form}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Phone number"/>
                <input type="text" placeholder="Email"/>
                <button className={style.buttonForm} onClick={() => alert("name")}>Order</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
