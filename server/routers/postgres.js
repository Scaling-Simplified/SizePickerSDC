const PostgresConnection = require('pg').Pool;

const db = new PostgresConnection({
  user: 'vikrampal',
  host: 'localhost',
  database: 'sdcproducts',
  password: 'testing',
});

const express = require('express');

const router = express.Router();

router.route('/getallproducts').get((req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(results.rows);
    }
  });
});

router.route('/getproductswhere').get((req, res) => {
  const { request } = req.body;
  db.query(`SELECT * FROM products WHERE ${request}`, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(results.rows);
    }
  });
});

router.route('/addproduct').post((req, res) => {
  const { value1, value2, value3, value4, value5, value6, value7 } = req.body;

  db.query(
    `INSERT INTO products VALUES (DEFAULT, '${value1}', '${value2}', '${value3}', ${value4}, '${value5}', ${value6}, ${value7}) RETURNING id`,
    (err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        console.log(results);
        res.status(201).send(`Product added with ID: ${results.rows[0].id}`);
      }
    }
  );
});

router.route('/deleteproduct').delete((req, res) => {
  const { id } = req.body;

  db.query(`DELETE FROM products WHERE id = ${id}`, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
