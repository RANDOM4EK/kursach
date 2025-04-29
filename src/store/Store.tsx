import { create } from 'zustand'
import obj from "../productsObj/ProductsObj.json";

interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  isDiscounted: boolean;
  img: string;
  description: string;
  quantity: number;
}

interface BasketStore {
  basket: Product[];
  addToBasket: (product: { id: number; quantity: number }) => void;
  removeFromBasket: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
const useBasketStore = create<BasketStore>((set) => ({
  basket: [],
  addToBasket: (product: { id: number; quantity: number }) =>
    set((state) => {
      const existingProduct = state.basket.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          basket: state.basket.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
        };
      } else {
        const productFromObj = obj.find((item) => item.id === product.id);
        if (productFromObj) {
          return {
            basket: [...state.basket, { ...productFromObj, quantity: product.quantity }],
          };
        }
        return state;
      }
    }),
  removeFromBasket: (id: number) =>
    set((state) => ({
      basket: state.basket.filter((item) => item.id !== id),
    })),
    updateQuantity: (id: number, quantity: number) => {
    set((state) => ({
      basket: state.basket.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },
}));

export default useBasketStore;
