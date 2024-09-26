import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')  // Connect to backend API
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Welcome to Coffee Shop</h2>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;