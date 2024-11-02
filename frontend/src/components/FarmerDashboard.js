// src/components/FarmerDashboard.js
import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/FarmerDashboard.css';

function FarmerDashboard() {
  const { addProduct } = useProductContext();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription,
    };
    addProduct(newProduct);
    setProductName('');
    setProductPrice('');
    setProductDescription('');
  };

  return (
    <div className="farmer-dashboard">
      <h2>Farmer Dashboard</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Product Price"
          required
        />
        <textarea
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          placeholder="Product Description"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default FarmerDashboard;
