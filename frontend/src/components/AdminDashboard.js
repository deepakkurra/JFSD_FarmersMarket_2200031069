// src/components/AdminDashboard.js
import React from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const { products, approveProduct, rejectProduct } = useProductContext();

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="product-approval-list">
        {products.filter(product => !product.isApproved).map(product => (
          <div key={product.id} className="product-approval-item">
            <span>{product.name} - ${product.price.toFixed(2)}</span>
            <p>{product.description}</p>
            <div className="approval-buttons">
              <button onClick={() => approveProduct(product.id)} className="approve-button">Approve</button>
              <button onClick={() => rejectProduct(product.id)} className="reject-button">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
