import { useState } from "react";
import { useParams } from "react-router-dom";
import obj from "../../productsObj/ProductsObj.json";
import style from "./Tovar.module.css";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";

export default function ProductDetails() {
  const { id } = useParams();
  const product = id ? obj.find((item) => item.id === parseInt(id)) : undefined;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Товар не найден!</p>;
  }
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const totalPrice = product.price * quantity;
  const totalDiscountedPrice = product.isDiscounted
    ? product.priceDiscounted * quantity
    : null;

  return (
    <>
      <Header />
      <div className={style.container}>
        <img
          className={style.imgProduct}
          src={"." + product.img}
          alt={product.title}
        />
        <div className={style.cartTovar}>
          <h1>{product.title}</h1>
          <div className={style.totalPrice}> 
            {product.isDiscounted && <p>{"$"+totalDiscountedPrice}</p>}
            <p className={style.itemPriceDiscount}>{"$"+totalPrice}</p>
          </div>
          <div className={style.quantity}>
            <button className={style.increment} onClick={decrementQuantity}>-</button>
            <p>{quantity}</p>
            <button className={style.increment} onClick={incrementQuantity}>+</button>
          </div>
          <button className={style.buttonAddToCart}>Add to cart</button>
          <p>{product.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
