import { useContext } from "react";
import { CartContext, CartContextType } from "../context/CartContext";

export default function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
