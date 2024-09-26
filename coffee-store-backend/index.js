const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // to handle JSON data

// Routes
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const products = require('./data/products');

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get a specific product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

let cart = [];

// Get cart items
app.get('/cart', (req, res) => {
  res.json(cart);
});

// Add a product to the cart
app.post('/cart', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Check if product is already in the cart
  const cartItem = cart.find(item => item.product.id === id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }

  res.json(cart);
});

// Remove a product from the cart
app.delete('/cart/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  cart = cart.filter(item => item.product.id !== productId);
  res.json(cart);
});