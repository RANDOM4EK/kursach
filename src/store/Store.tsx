import { create } from "zustand";
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
  setBasket: (basket: Product[]) => void;
  addToBasket: (product: { id: number; quantity: number }) => void;
  removeFromBasket: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const useBasketStore = create<BasketStore>((set) => ({
  // Загружаем сохраненную корзину из localStorage
  basket: JSON.parse(localStorage.getItem("basket") || "[]"),

  // Устанавливаем новую корзину и сохраняем в localStorage
  setBasket: (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
    set({ basket });
  },

  addToBasket: (product: { id: number; quantity: number }) =>
    set((state) => {
      const existingProduct = state.basket.find((item) => item.id === product.id);
      let newBasket;

      if (existingProduct) {
        newBasket = state.basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        const productFromObj = obj.find((item) => item.id === product.id);
        if (productFromObj) {
          newBasket = [...state.basket, { ...productFromObj, quantity: product.quantity }];
        } else {
          return state;
        }
      }

      localStorage.setItem("basket", JSON.stringify(newBasket));
      return { basket: newBasket };
    }),

  removeFromBasket: (id: number) =>
    set((state) => {
      const updatedBasket = state.basket.filter((item) => item.id !== id);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { basket: updatedBasket };
    }),

  updateQuantity: (id: number, quantity: number) =>
    set((state) => {
      const updatedBasket = state.basket.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { basket: updatedBasket };
    }),
}));

export default useBasketStore;
