// src/components/CartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, updateCartItemQuantity, removeCartItem } = useProductContext();
  const navigate = useNavigate();

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <span>${item.price.toFixed(2)}</span>
              <div className="quantity-controls">
                <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeCartItem(item.id)} className="remove-button">Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button className="place-order-button" onClick={() => navigate('/order')}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
