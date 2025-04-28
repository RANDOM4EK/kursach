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
}

const useBasketStore = create<BasketStore>((set: (arg0: { (state: { basket: any[]; }): { basket: any[]; }; (state: any): { basket: any; }; }) => any) => ({
  basket: [],
  addToBasket: (product: { id: number; quantity: any; }) =>
    set((state: { basket: any[]; }) => {
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
  removeFromBasket: (id: any) =>
    set((state) => ({
      basket: state.basket.filter((item: { id: any; }) => item.id !== id),
    })),
}));

export default useBasketStore;
