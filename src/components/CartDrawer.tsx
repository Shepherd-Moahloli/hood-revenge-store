import React from "react";
import useCart from "../hooks/useCart";
import CloseIcon from "./Icon/CloseIcon";
import "./CartDrawer.css";
import { CartItem } from "../types";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  items?: CartItem[];
};

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items = [],
}) => {
  const { cartItems: ctxItems, removeFromCart, clearCart } = useCart();
  const cartItems = items.length > 0 ? items : ctxItems;

  if (!isOpen) return null;

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-drawer-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="cart-drawer-content">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item: CartItem) => (
            <div key={item.id} className="cart-item">
              {item.image && (
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.title ?? item.name ?? "product"}
                />
              )}
              <div className="cart-item-details">
                <h3>{item.title ?? item.name}</h3>
                <p>${item.price}</p>
                <p>Qty: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-drawer-footer">
        <button className="checkout-button">Checkout</button>
        <button className="clear-button" onClick={() => clearCart()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
