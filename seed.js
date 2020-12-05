const debug = require('debug')('app:seed');
const mongoose = require('mongoose');
const Products = require('./db/models/product.js');
const testData = require('./dataGenerator.js');

mongoose
  .connect('mongodb://localhost/sizepicker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debug('Connected to sizepicker DB'));

const seedDb = async (quantity) => {
  const newShoes = testData.createShoes(quantity);

  try {
    await Products.insertOneOrMany(newShoes);
  } catch (exception) {
    debug(exception.message);
  }

  mongoose.disconnect();
};

seedDb(100);
