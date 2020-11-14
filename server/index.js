const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sizesRouter = require('./routers/sizes.js');
const mongoose = require('mongoose');
const port = 3003;

mongoose.connect('mongodb://localhost/sizepicker',
  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to sizepicker DB'));

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.text());
app.use('/api/sizes', sizesRouter);

app.listen(port, () => {
  console.log(`Spice traders on port ${port}`);
})