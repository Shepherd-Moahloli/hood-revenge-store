import React from "react";
import useCart from "../hooks/useCart";
import { CartItem } from "../types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./cart.css"; // Assuming you have a specific CSS file for cart styles

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, totalAmount } = useCart();

  return (
    <div className="cart-page">
      <Header />
      <main>
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item: CartItem) => (
                <li key={item.id}>
                  {item.title ?? item.name} — ${item.price} × {item.quantity}
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <p>Total: ${totalAmount}</p>
            <button onClick={() => clearCart()}>Clear Cart</button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
