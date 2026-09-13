import React, { createContext, useState, useContext } from "react";
import { CartItem } from "../types";

export type CartContextType = {
  cartItems: CartItem[];
  totalAmount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  setQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
};

const defaultValue: CartContextType = {
  cartItems: [],
  totalAmount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  setQuantity: () => {},
  clearCart: () => {},
};

export const CartContext = createContext<CartContextType | undefined>(
  defaultValue,
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const recalcTotal = (list: CartItem[]) =>
    list.reduce((t, i) => t + i.price * (i.quantity ?? 1), 0);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      return exists
        ? prev.map((p) =>
            p.id === item.id
              ? { ...p, quantity: p.quantity + item.quantity }
              : p,
          )
        : [...prev, item];
    });
  };

  const removeFromCart = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const setQuantity = (id: string, qty: number) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)),
    );

  const clearCart = () => setItems([]);

  const totalAmount = recalcTotal(items);

  return (
    <CartContext.Provider
      value={{
        cartItems: items,
        totalAmount,
        addToCart,
        removeFromCart,
        setQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
