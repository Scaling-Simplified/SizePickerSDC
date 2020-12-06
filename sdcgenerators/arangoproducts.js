const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 100;
const filename = argv.output || 'arangoproducts.json';
const stream = fs.createWriteStream(filename);
const fakeData = require('./fakedata');

const getRandomElement = (array) => array[Math.floor(array.length * Math.random())];

const getRandomNum = (min, max, rounded = false) => {
  const randInt = faker.random.number({
    min,
    max,
  });
  return rounded ? Math.ceil(randInt / 10) * 10 : randInt;
};

const createProduct = (num) => {
  const result = {
    _key: num.toString(),
    productId: num,
    productName: getRandomElement(fakeData.shoeName),
    category: getRandomElement(fakeData.categories),
    color: faker.commerce.color(),
    price: getRandomNum(100, 400, true),
    photoUrl: getRandomElement(fakeData.urls),
    totalReviews: getRandomNum(10, 300),
    averageRating: getRandomNum(0, 5),
    productSizes: {
      5: getRandomNum(1, 100),
      5.5: getRandomNum(1, 100),
      6: getRandomNum(1, 100),
      6.5: getRandomNum(1, 100),
      7: getRandomNum(1, 100),
      7.5: getRandomNum(1, 100),
      8: getRandomNum(1, 100),
      8.5: getRandomNum(1, 100),
      9: getRandomNum(1, 100),
      9.5: getRandomNum(1, 100),
      10: getRandomNum(1, 100),
      10.5: getRandomNum(1, 100),
      11: getRandomNum(1, 100),
      11.5: getRandomNum(1, 100),
      12: getRandomNum(1, 100),
      12.5: getRandomNum(1, 100),
      13: getRandomNum(1, 100),
      13.5: getRandomNum(1, 100),
      14: getRandomNum(1, 100),
    },
  };

  return JSON.stringify(result) + '\n';
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;

  function writing() {
    const canWrite = true;
    let num = 1;
    do {
      i -= 1;
      const product = createProduct(num);
      num += 1;
      if (i === 0) {
        writeStream.write(product, encoding, done);
      } else {
        writeStream.write(product, encoding);
      }
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

startWriting(stream, 'utf-8', () => {
  stream.end();
});
