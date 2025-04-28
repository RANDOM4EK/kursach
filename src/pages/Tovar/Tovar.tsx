import { useState } from "react";
import { useParams } from "react-router-dom";
import obj from "../../productsObj/ProductsObj.json";
import style from "./Tovar.module.css";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";
import useBasketStore from "../../store/Store";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToBasket } = useBasketStore();
  const product = id ? obj.find((item) => item.id === Number(id)) : undefined;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Товар не найден!</p>;
  }

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const handleProductClick = () => {
    if (product) {
      addToBasket({ id: product.id, quantity });
    }
  };

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
            {product.isDiscounted && (
              <p>{"$" + Math.round(product.price - product.price * product.discount)}</p>
            )}
            {product.isDiscounted && (
              <p className={style.itemPriceDiscount}>{"$" + product.price}</p>
            )}
            {!product.isDiscounted && <p>{"$" + product.price}</p>}
          </div>
          <div className={style.quantity}>
            <button className={style.increment} onClick={decrementQuantity}>
              -
            </button>
            <p>{quantity}</p>
            <button className={style.increment} onClick={incrementQuantity}>
              +
            </button>
            <button
              onClick={handleProductClick}
              className={style.buttonAddToCart}
            >
              Add to cart
            </button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
