require('dotenv').config();
const mongoose = require('mongoose');
const debug = require('debug')('app:server');
const createServer = require('./server');

mongoose.connect('mongodb://localhost/sizepicker',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    debug('Connected to sizepicker');
    const app = createServer();
    app.listen(process.env.PORT, () => {
      debug(`Spice traders on port ${process.env.PORT}`);
    });
  });