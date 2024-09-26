import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <Link to={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductItem;