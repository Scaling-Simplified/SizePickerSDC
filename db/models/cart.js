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

const insertOne = async (productOrProducts) => CartModel.create(productOrProducts);

module.exports = {
  findAll,
  insertOne,
};
