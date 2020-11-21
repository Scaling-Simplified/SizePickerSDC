const debug = require('debug')('app:server:cart');
const express = require('express');
const cartDb = require('../../db/models/cart.js');

const router = express.Router();

router.route('/').post(async (req, res) => {
  const wholeCart = await cartDb.insertOneReturnCart(req.body).catch((exception) => {
    debug(exception);
    res.status(404).send(exception);
  });
  res.status(200).send(wholeCart);
});

router.route('/').get(async (req, res) => {
  const wholeCart = await cartDb.findAll().catch((ex) => {
    debug('error getting cart', ex);
    res.status(404).send(ex);
  });
  res.status(200).send(wholeCart);
});

module.exports = router;
