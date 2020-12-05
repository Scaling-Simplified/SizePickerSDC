const mongoose = require('mongoose');
const debug = require('debug')('app:models:product');

const productSchema = mongoose.Schema({
  name: String,
  id: Number,
  category: String,
  color: String,
  price: Number,
  photoUrl: String,
  numOfReviews: Number,
  averageRating: Number,
  skus: [{ size: String, stock: Number }],
});

const ProductModel = mongoose.model('Product', productSchema);

const findAll = async () => ProductModel.find({});

const findOne = async (id) => ProductModel.findOne({ id });

const deleteOne = async (id) => ProductModel.deleteOne({ id });

const addProduct = async (product) => ProductModel.create(product);

const updateProduct = async (id, data, cb) => ProductModel.updateOne(id, data, cb);

const insertOneOrMany = async (productOrProducts) => ProductModel.save(productOrProducts);

// eslint-disable-next-line no-unused-vars
const dropCollection = async () => ProductModel.remove({}).catch((ex) => debug(ex.message));

module.exports = {
  findAll,
  findOne,
  insertOneOrMany,
  deleteOne,
  addProduct,
  ProductModel,
  updateProduct,
};
