const express = require('express');
const sizesRouter = require('./routers/shoes');
const cartRouter = require('./routers/cart');

function createServer() {
  const app = express();
  app.use(express.static(`${__dirname}/../public`));
  app.use(express.json());
  app.use('/api/products', sizesRouter);
  app.use('/api/cart', cartRouter);
  return app;
}

module.exports = createServer;
