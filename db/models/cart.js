const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  name: String,
  color: String,
  price: Number,
  photo_url: String,
  quantity: Number,
  skus: [{ size: String, stock: Number }],
});

const CartModel = mongoose.model('Cart', cartSchema);

const findAll = async () => CartModel.find({});

const insertOne = async (product) => CartModel.create(product);

module.exports = {
  findAll,
  insertOne,
};
