/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
const { Database, aql } = require('arangojs');

const arangoDb = new Database();
arangoDb.useDatabase('sdcproducts');
const products = arangoDb.collection('products');
const customers = arangoDb.collection('customers');

const express = require('express');
// const debug = require('debug')('app:server:sizes');
// const productDb = require('../../db/models/product.js');

const router = express.Router();

// Get a product from ArangoDB with an ID
router.route('/arango/product/:id').get(async (req, res) => {
  const productId = req.params.id;
  try {
    const allProducts = [];
    const productCursor = await arangoDb.query(aql`
    FOR item IN ${products}
    FILTER item['_key'] == ${productId}
    RETURN item
    `);
    // eslint-disable-next-line no-restricted-syntax
    for await (const item of productCursor) {
      allProducts.push(item);
    }
    // eslint-disable-next-line no-console
    res.json(allProducts[0]);
  } catch (err) {
    res.sendStatus(404);
  }
});

// Get a customer from ArangoDB with an ID
router.route('/arango/customer/:id').get(async (req, res) => {
  const customerId = req.params.id;
  try {
    const allCustomers = [];
    const customerCursor = await arangoDb.query(aql`
    FOR item IN ${customers}
    FILTER item['_key'] == ${customerId}
    RETURN item
    `);
    // eslint-disable-next-line no-restricted-syntax
    for await (const item of customerCursor) {
      allCustomers.push(item);
    }
    // eslint-disable-next-line no-console
    res.json(allCustomers[0]);
  } catch (err) {
    res.sendStatus(404);
  }
});

router.route('/arango/addproduct').post(async (req, res) => {
  const { newProduct } = req.body;
  try {
    await arangoDb.query(aql`
    INSERT ${newProduct} INTO products`);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(404);
  }
});

// router.route('/').get(async (req, res) => {
//   const product = await productDb.findOne(0).catch((ex) => {
//     debug(ex);
//     res.status(404).send(ex.message);
//   });
//   res.send(product);
// });

// router.route('/:itemId/sizepicker').get(async (req, res) => {
//   const { itemId } = req.params;
//   const product = await productDb.findOne(itemId).catch((ex) => {
//     debug(ex);
//     res.status(404).send(ex.message);
//   });
//   res.send(product);
// });

// router.route('/:itemId').delete(async (req, res) => {
//   const { itemId } = req.params;
//   await productDb.deleteOne(itemId).catch((ex) => {
//     debug(ex);
//     res.status(404).send(ex.message);
//   });
//   res.sendStatus(200);
// });

// router.route('/').post(async (req, res) => {
//   const product = new productDb.ProductModel(req.body);
//   await productDb.addProduct(product).catch((ex) => {
//     debug(ex);
//     res.status(404).send(ex.message);
//   });
//   res.sendStatus(200);
// });

// router.route('/').put(async (req, res) => {
//   const { id } = req.body;
//   const data = req.body.update;
//   await productDb.updateProduct({ id }, data).catch((ex) => {
//     debug(ex);
//     res.status(404).send(ex.message);
//   });
//   res.sendStatus(200);
// });

router.route('/:itemId/sizepicker').get(async (req, res) => {
  const { itemId } = req.params;
  try {
    const legacyRequest = {};
    const customerCursor = await arangoDb.query(aql`
    FOR item IN ${products}
    FILTER item['_key'] == ${itemId}
    RETURN item
    `);
    // eslint-disable-next-line no-restricted-syntax
    for await (const item of customerCursor) {
      legacyRequest.name = item.productName;
      legacyRequest.id = item.productId;
      legacyRequest.category = item.category;
      legacyRequest.color = item.color;
      legacyRequest.price = item.price;
      legacyRequest.photoUrl = item.photoUrl;
      legacyRequest.numOfReviews = item.totalReviews;
      legacyRequest.averageRating = item.averageRating;
      legacyRequest.skus = [
        {
          size: '5',
          stock: item.productSizes['5'],
        },
        {
          size: '5.5',
          stock: item.productSizes['5.5'],
        },
        {
          size: '6',
          stock: item.productSizes['6'],
        },
        {
          size: '6.5',
          stock: item.productSizes['6.5'],
        },
        {
          size: '7',
          stock: item.productSizes['7'],
        },
        {
          size: '7.5',
          stock: item.productSizes['7.5'],
        },
        {
          size: '8',
          stock: item.productSizes['8'],
        },
        {
          size: '8.5',
          stock: item.productSizes['8.5'],
        },
        {
          size: '9',
          stock: item.productSizes['9'],
        },
        {
          size: '9.5',
          stock: item.productSizes['9.5'],
        },
        {
          size: '10',
          stock: item.productSizes['10'],
        },
        {
          size: '10.5',
          stock: item.productSizes['10.5'],
        },
        {
          size: '11',
          stock: item.productSizes['11'],
        },
        {
          size: '11.5',
          stock: item.productSizes['11.5'],
        },
        {
          size: '12',
          stock: item.productSizes['12'],
        },
        {
          size: '12.5',
          stock: item.productSizes['12.5'],
        },
        {
          size: '13',
          stock: item.productSizes['13'],
        },
        {
          size: '13.5',
          stock: item.productSizes['13.5'],
        },
        {
          size: '14',
          stock: item.productSizes['14'],
        },
      ];
    }
    // eslint-disable-next-line no-console
    res.json(legacyRequest);
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router;
