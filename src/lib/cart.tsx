import {createContext, useContext, useEffect, useState, type ReactNode} from 'react';
import {restoreCart, addItem, updateItem, type CartItem} from './cart-state';
const CartContext = createContext<{
  items: CartItem[]; ready: boolean;
  add: (id: string, size: string, color?: string) => void;
  update: (id: string, size: string, quantity: number, color?: string) => void;
}>({items: [], ready: false, add: () => {}, update: () => {}});
export function CartProvider({children}: {children: ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setItems(restoreCart(JSON.parse(localStorage.getItem('hood-revenge-cart-v1') || '[]'))); } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) try { localStorage.setItem('hood-revenge-cart-v1', JSON.stringify(items)); } catch {}
  }, [items, ready]);
  return <CartContext.Provider value={{items, ready,
    add: (id, size, color) => setItems(old => addItem(old, id, size, color)),
    update: (id, size, quantity, color) => setItems(old => updateItem(old, id, size, quantity, color)),
  }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
