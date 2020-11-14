/* eslint-disable no-return-await */
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  id: Number,
  category: String,
  color: String,
  price: Number,
  photo_url: String,
  skus: [{ size: String, stock: Number }],
});

const ProductModel = mongoose.model('Product', productSchema);

const findAll = async () => ProductModel.find({});

const findOne = async (id) => ProductModel.findOne({ id });

const insertOneOrMany = async (productOrProducts) => ProductModel.create(productOrProducts);

// eslint-disable-next-line no-unused-vars
const dropCollection = async () => {
  try {
    return await ProductModel.remove({});
  } catch (ex) {
    console.log(ex.message);
  }
};

module.exports = {
  findAll,
  findOne,
  insertOneOrMany,
};
