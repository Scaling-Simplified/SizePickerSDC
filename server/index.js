require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const debug = require('debug')('app:server');
const sizesRouter = require('./routers/sizes.js');

const app = express();

mongoose.connect('mongodb://localhost/sizepicker',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debug('Connected to sizepicker'));

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.text());
app.use('/api/sizes', sizesRouter);

app.listen(process.env.PORT, () => {
  debug(`Spice traders on port ${process.env.PORT}`);
});
