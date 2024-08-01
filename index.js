import express from 'express';
import products from './data/products.js';
import stock from './data/stock-price.js';
const app = express();
const port = 3001;

// Avoid any CORS error when client-side fetching
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Products endpoint
app.get('/api/products', (req, res) => {
  res.send(products);
});

// Stock endpoint
app.get('/api/stock-price/:sku', (req, res) => {
  const productSku = req.params.sku;
  const product = stock[productSku];

  if (product) {
    res.send(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
