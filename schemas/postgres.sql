-- Since we might run the import many times we will drop if it exists
DROP DATABASE IF EXISTS sdcproducts;

-- Create our database with name sdcproducts
CREATE DATABASE sdcproducts;

-- Make sure we are in the right database before creating tables
\c sdcproducts;

DROP TABLE IF EXISTS product_sizes;
DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
  id              SERIAL PRIMARY KEY,
  productName     VARCHAR(100) NOT NULL,
  category        VARCHAR(50) NOT NULL,
  color           VARCHAR(50) NOT NULL,
  price           INTEGER NOT NULL,
  photoUrl        VARCHAR(400) NOT NULL,
  totalReviews    INTEGER NOT NULL,
  averageRating   INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS product_sizes (
  id         SERIAL PRIMARY KEY,
  productId  INTEGER REFERENCES products(id),
  size       VARCHAR(30) NOT NULL,
  quantity   INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS customers (
  id             SERIAL PRIMARY KEY,
  customerName   VARCHAR(100) NOT NULL,
  customerEmail  VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS customer_cart (
  customerId  INTEGER REFERENCES customers(id),
  productId   INTEGER REFERENCES product_sizes(id),
  quantity    INTEGER DEFAULT 0,
  dateAdded   VARCHAR(100)
);