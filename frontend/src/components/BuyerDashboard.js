// src/components/BuyerDashboard.js
import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import '../styles/BuyerDashboard.css';

function BuyerDashboard() {
  const { products, addToCart, cart } = useProductContext();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate the total quantity of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Filter products based on search query
  const filteredProducts = products
    .filter(product => product.isApproved && product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="buyer-dashboard">
      <div className="header">
        <h2>Available Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="cart-icon" onClick={() => navigate('/cart')}>
          🛒
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
      </div>

      <div className="product-gallery">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => addToCart(product)} className="add-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerDashboard;
