const express = require('express');
const path = require('path');
const compression = require('compression');
// eslint-disable-next-line no-unused-vars
const sizesRouter = require('./routers/shoes');
const cartRouter = require('./routers/cart');
const pgRouter = require('./routers/postgres');

function createServer() {
  const app = express();
  app.use(compression());
  app.use(express.static(`${__dirname}/../public`));
  app.use(express.json());
  app.use('/api/products', sizesRouter);
  app.use('/db', pgRouter);
  app.use('/api/cart', cartRouter);
  app.get('/:itemId', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  return app;
}

module.exports = createServer;
