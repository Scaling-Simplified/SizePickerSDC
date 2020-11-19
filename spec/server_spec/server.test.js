/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');
const createServer = require('../../server/server');
const Product = require('../../db/models/product');
const testData = require('./testData.js');

beforeEach((done) => {
  mongoose.connect('mongodb://localhost/testSizePicker',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

const app = createServer();

test('GET /api/sizes/ should return product ID 0', async () => {
  const shoe = await Product.insertOneOrMany(testData.products[0]);
  await supertest(app)
    .get('/api/sizes')
    .expect(200)
    .then((res) => {
      expect(typeof res.body).toBe('object');

      expect(res.body.id).toBe(0);
      expect(res.body.name).toBe(shoe.name);
      expect(res.body.category).toBe(shoe.category);
    });
});

test('GET /api/sizes/2 should return product ID 2', async () => {
  const shoes = await Product.insertOneOrMany(testData.products);
  await supertest(app)
    .get('/api/sizes/2')
    .expect(200)
    .then((res) => {
      expect(typeof res.body).toBe('object');

      expect(res.body.id).toBe(2);
      expect(res.body.name).toBe(shoes[2].name);
      expect(res.body.category).toBe(shoes[2].category);
    });
});
