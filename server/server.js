const express = require('express');
const sizesRouter = require('./routers/sizes');

function createServer() {
  const app = express();
  app.use(express.static(`${__dirname}/../public`));
  app.use(express.json());
  app.use('/api/sizes', sizesRouter);
  return app;
}

module.exports = createServer;
