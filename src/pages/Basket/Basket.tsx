import { useEffect, useState } from "react";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import style from "./Basket.module.css";
import { useNavigate } from "react-router-dom";
import useBasketStore from "../../store/Store";

export default function Basket() {
  const navigate = useNavigate();
  const { basket, removeFromBasket, updateQuantity, setBasket } = useBasketStore();
  const [userData, setUserData] = useState({
    name: localStorage.getItem("userName") || "",
    phone: localStorage.getItem("userPhone") || "",
    email: localStorage.getItem("userEmail") || ""
  });

  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      const parsedBasket = JSON.parse(savedBasket);
      setBasket(parsedBasket);
    }

    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const incrementQuantity = (id: number) => {
    const item = basket.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decrementQuantity = (id: number) => {
    const currentItem = basket.find((item) => item.id === id);
    if (currentItem && currentItem.quantity > 1) {
      updateQuantity(id, currentItem.quantity - 1);
    }
  };

  const totalPrice = basket.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        (item.isDiscounted ? item.price - item.price * item.discount : item.price),
    0
  );


  const discountedPrice = totalPrice * 0.95;

  const totalQuantity = basket.reduce((sum, item) => sum + item.quantity, 0);

  const handleOrder = () => {
    alert("Order placed successfully!");
    setIsPurchaseComplete(true);
    localStorage.removeItem("basket");
    setBasket([]);
  };

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.firsH1}>Shopping cart</h1>
        {basket.length === 0 ? (
          <>
            <p>Looks like you have no items in your basket currently.</p>
            <button className={style.startShopping} onClick={() => navigate(`/All_Product`)}>
              Continue Shopping
            </button>
          </>
        ) : (
          <div className={style.basketItems}>
            <div className={style.basketItemsList}>
              {basket.map((item) => (
                <div key={item.id} className={style.basketItem}>
                  <img src={item.img} alt={item.title} className={style.itemImage} />
                  <div className={style.itemDetails}>
                    <h2>{item.title}</h2>
                    <div className={style.quantityControl}>
                      <button className={style.increment} onClick={() => decrementQuantity(item.id)}> - </button>
                      <p>{item.quantity}</p>
                      <button className={style.increment} onClick={() => incrementQuantity(item.id)}> + </button>
                      {item.isDiscounted && (
                        <p className={style.itemPrice}>
                          {"$" + Math.round((item.price - item.price * item.discount) * item.quantity)}
                        </p>
                      )}
                      <p className={item.isDiscounted ? style.itemPriceDiscount : style.itemPrice}>
                        {"$" + item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button className={style.removeButton} onClick={() => removeFromBasket(item.id)}>
                    удалить
                  </button>
                </div>
              ))}
            </div>
            <div className={style.orderDetails}>
              <h2>Order details</h2>
              <p>{totalQuantity} items</p>
              <div className={style.totalPriceContainer}>
                <p>Original Total</p>
                <p className={style.totalPrice}>${totalPrice.toFixed(0)}</p>
              </div>
              <div className={style.totalPriceContainer}>
                <p>Discounted Total (5% off)</p>
                <p className={style.totalPrice}>${discountedPrice.toFixed(1)}</p>
              </div>
              <form action="" className={style.form}>
                <input type="text" placeholder="Name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                <input type="text" placeholder="Phone number" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                <input type="text" placeholder="Email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                <button className={style.buttonForm} onClick={handleOrder}>
                  Order
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
