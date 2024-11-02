// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AdminDashboard from './components/AdminDashboard';
import FarmerDashboard from './components/FarmerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import { ProductProvider } from './context/ProductContext';
import './styles/App.css';
import CartPage from './components/CartPage';
import OrderPage from './components/OrderPage';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <ProductProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/buyer" element={<BuyerDashboard />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/order' element={<OrderPage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
