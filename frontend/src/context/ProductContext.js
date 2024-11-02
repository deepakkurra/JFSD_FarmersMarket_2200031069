// src/context/ProductContext.js
import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, isApproved: false }]);
  };

  const approveProduct = (productId) => {
    setProducts(
      products.map(product =>
        product.id === productId ? { ...product, isApproved: true } : product
      )
    );
  };

  const rejectProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        approveProduct,
        rejectProduct,
        addToCart,
        cart,
        updateCartItemQuantity,
        removeCartItem
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
