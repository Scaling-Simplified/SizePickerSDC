const express = require('express');
const debug = require('debug')('app:server:sizes');
const productDb = require('../../db/models/product.js');

const router = express.Router();

router.route('/').get(async (req, res) => {
  const product = await productDb.findOne(0).catch((ex) => {
    debug(ex);
    res.status(404).send(ex.message);
  });
  res.send(product);
});

router.route('/:itemId').get(async (req, res) => {
  const { itemId } = req.params;
  const product = await productDb.findOne(itemId).catch((ex) => {
    debug(ex);
    res.status(404).send(ex.message);
  });
  res.send(product);
});

module.exports = router;
