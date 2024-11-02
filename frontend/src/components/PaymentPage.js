// src/components/PaymentPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import '../styles/PaymentPage.css';

function PaymentPage() {
  const { setCart } = useProductContext();
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment successful!");
    setCart([]); // Clear the cart after payment
    navigate('/'); // Redirect to BuyerDashboard or homepage
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      <p>Enter your payment details to complete the order.</p>
      <button onClick={handlePayment} className="confirm-payment-button">
        Confirm Payment
      </button>
    </div>
  );
}

export default PaymentPage;
