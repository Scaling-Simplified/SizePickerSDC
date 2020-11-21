const mongoose = require('mongoose');
const debug = require('debug')('app:db:cart');

const cartSchema = mongoose.Schema({
  name: String,
  itemId: Number,
  color: String,
  price: Number,
  photo_url: String,
  quantity: Number,
  size: String,
  stock: Number,
});

const CartModel = mongoose.model('Cart', cartSchema);

const findAll = async () => CartModel.find({});

const findOne = async (itemId, size) => CartModel.findOne({ itemId, size });

const insertOne = async (product) => CartModel.create(product);

async function insertOneReturnCart(product) {
  debug('adding to cart');
  await CartModel.create(product).catch((ex) => debug(ex));
  const cart = await findAll();
  return cart;
}

module.exports = {
  findAll,
  findOne,
  insertOne,
  insertOneReturnCart,
};
