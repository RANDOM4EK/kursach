import { useParams } from "react-router-dom";
import obj from "../../productsObj/ProductsObj.json";

export default function ProductDetails() {
    const { id } = useParams();
    const product = id ? obj.find((item) => item.id === parseInt(id)) : undefined;
  
    if (!product) {
      return <p>Товар не найден!</p>;
    }
  
    return (
      <div>
        <h1>{product.title}</h1>
        <p>Цена: ${product.price}</p>
        {product.isDiscounted && (
          <p>Цена со скидкой: ${product.priceDiscounted}</p>
        )}
        <img src={product.img} alt={product.title} />
        <p>{product.description}</p>
      </div>
    );
  }
