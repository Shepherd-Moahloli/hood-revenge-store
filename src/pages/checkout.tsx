import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import useCart from "../hooks/useCart";
import { CartItem } from "../types";

const CheckoutPage = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <ul>
              {cartItems.map((item: CartItem) => (
                <li key={item.id}>
                  {item.title ?? item.name} — ${item.price}
                </li>
              ))}
            </ul>
            <p>Total: ${totalAmount}</p>
          </div>
          <CheckoutForm />
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
