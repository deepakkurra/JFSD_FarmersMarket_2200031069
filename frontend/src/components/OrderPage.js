// src/components/OrderPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import '../styles/OrderPage.css';

function OrderPage() {
  const { cart } = useProductContext();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="order-page">
      <h2>Order Summary</h2>
      <div className="order-items">
        {cart.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="order-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
      <button className="payment-button" onClick={() => navigate('/payment')}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default OrderPage;
