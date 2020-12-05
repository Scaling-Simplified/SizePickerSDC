require('dotenv').config();
const mongoose = require('mongoose');
const debug = require('debug')('app:server');
const createServer = require('./server');

const port = 3002;

<<<<<<< HEAD
mongoose
  .connect('mongodb://localhost/sizepicker', { useNewUrlParser: true, useUnifiedTopology: true })
=======
mongoose.connect('mongodb://database/sizepicker',
  { useNewUrlParser: true, useUnifiedTopology: true })
>>>>>>> a290989b4a5aee6be844b50a3e3e5f4734348e67
  .then(() => {
    debug('Connected to sizepicker');
    const app = createServer();
    app.listen(port, () => {
      debug(`Spice traders on port ${port}`);
    });
  });
