// eslint-disable-next-line no-unused-vars
const { Database, aql } = require('arangojs');

const db = new Database();

// eslint-disable-next-line no-unused-vars
const shoes = db.collection('sdcproducts');

// eslint-disable-next-line no-unused-vars
const schema = {
  id: { type: 'number' },
  product_name: { type: 'string' },
  category: { type: 'string' },
  color: { type: 'string' },
  price: { type: 'integer' },
  photo_url: { type: 'string' },
  total_reviews: { type: 'number' },
  average_rating: { type: 'integer' },
  sizes: { type: 'array' },
};
