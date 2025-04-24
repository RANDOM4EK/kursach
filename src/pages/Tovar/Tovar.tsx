import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import obj from "../../productsObj/ProductsObj.json";
import style from "./Tovar.module.css";
import Header from "../../components/Home/Header/Header";
import Footer from "../../components/Home/Footer/Footer";

export default function ProductDetails() {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/brasker`);
  };

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
  const totalDiscountedPrice = product.isDiscounted
    ? Math.round(product.price - product.price * product.discount) * quantity
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
            {product.isDiscounted && <p>{"$" + totalDiscountedPrice}</p>}
            {product.isDiscounted && <p className={style.itemPriceDiscount}>{"$" + product.price*quantity}</p>}
            {product.isDiscounted && (<p className={style.discount}>{product.discount*-100}%</p>)}
            {!product.isDiscounted && <p>{"$" + product.price * quantity}</p>}
            
          </div>
          <div className={style.quantity}>
            <button className={style.increment} onClick={decrementQuantity}>
              -
            </button>
            <p>{quantity}</p>
            <button className={style.increment} onClick={incrementQuantity}>
              +
            </button> 
            <button onClick={() => handleProductClick()} className={style.buttonAddToCart}>Add to cart</button>
          </div>
         
          <p>{product.description}</p>
        </div>
      </div>
      <div className="mmm"></div>
      <Footer />
    </>
  );
}
