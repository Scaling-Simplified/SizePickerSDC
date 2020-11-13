const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  categories: String,
  color: String,
  price: Number,
  photo_url: String,
  skus: [{ size: String, stock: Number }]
})

const ProductModel = mongoose.model('Product', productSchema);

const findAll = async () => {
  return await ProductModel.find({});
}

const findOne = async (name) => {
  return await ProductModel.find({name})
}

const insertOneOrMany = async (productOrProducts) => {
  return await ProductModel.create(productOrProducts);
}

const dropCollection = async () => {
  try {
    return await ProductModel.remove({})
  } catch (ex) {
    console.log(ex.message);
  }
}

module.exports = {
  findAll,
  findOne,
  insertOneOrMany
}