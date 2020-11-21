require('dotenv').config();
const mongoose = require('mongoose');
const debug = require('debug')('app:server');
const createServer = require('./server');

const port = 3002;

mongoose.connect('mongodb://localhost/sizepicker',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    debug('Connected to sizepicker');
    const app = createServer();
    app.listen(port, () => {
      debug(`Spice traders on port ${port}`);
    });
  });
