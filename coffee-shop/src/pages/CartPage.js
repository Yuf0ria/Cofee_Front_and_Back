import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cart')  // Connect to backend API
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;