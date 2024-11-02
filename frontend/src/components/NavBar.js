// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Farmers' Market</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/farmer">Farmer</Link></li>
        <li><Link to="/buyer">Buyer</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
