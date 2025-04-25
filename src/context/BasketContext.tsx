import React, { createContext, useState } from "react";
import obj from "../productsObj/ProductsObj.json";
export interface BasketContextType {
  basket: { id: number; title: string; price: number; discount: number; isDiscounted: boolean; img: string; description: string; quantity: number }[];
  addToBasket: (product: { id: number; quantity: number }) => void;
  removeFromBasket: (id: number) => void;
}

export const BasketContext = createContext<BasketContextType | null>(null);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<BasketContextType["basket"]>([]);

  const addToBasket = (product: { id: number; quantity: number }) => {
    setBasket((prevBasket) => {
      const existingProduct = prevBasket.find((item) => item.id === product.id);
      if (existingProduct) {

        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {

        const productFromObj = obj.find((item) => item.id === product.id);
        if (productFromObj) {
          return [...prevBasket, { ...productFromObj, quantity: product.quantity }];
        }
        return prevBasket;
      }
    });
  };

  const removeFromBasket = (id: number) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};


