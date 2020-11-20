const debug = require('debug')('app:server:cart');
const express = require('express');
const cartDb = require('../../db/models/cart.js');

const router = express.Router();

router.route('/').post(async (req, res) => {
  debug(req.body);
  // increment quantity by one if item is found
  const one = await cartDb.findOne(req.body.itemId, req.body.size).catch(async (ex) => {
    debug('Product not already in cart');
  });
  const wholeCart = await cartDb.insertOneReturnCart(req.body).catch((exception) => {
    debug(exception);
    res.status(404).send(exception);
  });
  res.status(200).send(wholeCart);
  res.send(one);
});

module.exports = router;
