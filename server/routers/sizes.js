const express = require('express');
const app = express();
const productDb = require('../../db/models/product.js');
const router = express.Router();

router.route('/').get(async (req, res) => {
  const product = await productDb.findOne().catch((ex) => {
    console.log(ex);
    res.status(404).send(ex.message);
  });
  res.send(product);
})

router.route('/:itemName').get(async (req, res) => {;
  const itemName = req.params.itemName.split('-').join(' ');
  const product = await productDb.findOne(itemName).catch((ex) => {
    console.log(ex);
    res.status(404).send(ex.message);
  });
  res.send(product);
})

module.exports = router;