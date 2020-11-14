const express = require('express');
const app = express();
const productDb = require('../../db/models/product.js');
const router = express.Router();

router.route('/').get(async (req, res) => {
  const product = await productDb.findOne(0).catch((ex) => {
    console.log(ex);
    res.status(404).send(ex.message);
  });
  res.send(product);
})

router.route('/:itemId').get(async (req, res) => {
  const itemId = req.params.itemId;
  const product = await productDb.findOne(itemId).catch((ex) => {
    console.log(ex);
    res.status(404).send(ex.message);
  });
  res.send(product);
})

module.exports = router;