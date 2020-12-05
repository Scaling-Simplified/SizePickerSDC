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

<<<<<<< HEAD
router.route('/:itemId').get(async (req, res) => {
=======
router.route('/:itemId/sizepicker').get(async (req, res) => {
>>>>>>> a290989b4a5aee6be844b50a3e3e5f4734348e67
  const { itemId } = req.params;
  const product = await productDb.findOne(itemId).catch((ex) => {
    debug(ex);
    res.status(404).send(ex.message);
  });
  res.send(product);
});

<<<<<<< HEAD
router.route('/:itemId').delete(async (req, res) => {
  const { itemId } = req.params;
  await productDb.deleteOne(itemId).catch((ex) => {
    debug(ex);
    res.status(404).send(ex.message);
  });
  res.sendStatus(200);
});

router.route('/').post(async (req, res) => {
  const product = new productDb.ProductModel(req.body);
  await productDb.addProduct(product).catch((ex) => {
    debug(ex);
    res.status(404).send(ex.message);
  });
  res.sendStatus(200);
});

router.route('/').put(async (req, res) => {
  const { id } = req.body;
  const data = req.body.update;
  await productDb.updateProduct({ id }, data).catch((ex) => {
    debug(ex);
    res.status(404).send(ex.message);
  });
  res.sendStatus(200);
});

=======
>>>>>>> a290989b4a5aee6be844b50a3e3e5f4734348e67
module.exports = router;
