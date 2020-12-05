const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 100;
const filename = argv.output || 'products.csv';
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

const createProduct = () => {
  const productName = getRandomElement(fakeData.shoeName);
  const category = getRandomElement(fakeData.categories);
  const color = faker.commerce.color();
  const price = getRandomNum(100, 200, true);
  const photoUrl = getRandomElement(fakeData.urls);
  const totalReviews = getRandomNum(10, 300, true);
  const averageRating = getRandomNum(0, 5, true);

  return `${productName}, ${category}, ${color}, ${price}, ${photoUrl}, ${totalReviews}, ${averageRating}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;

  function writing() {
    const canWrite = true;

    do {
      // eslint-disable-next-line no-plusplus
      i--;

      const product = createProduct();
      // check if i === 0 so we would write and call 'done'
      if (i === 0) {
        // we are done so fire the callback
        writeStream.write(product, encoding, done);
      } else {
        // we are not done so don't fire the callback
        writeStream.write(product, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      // our buffer for stream filled and need to wait to drain
      // Write some more once it drains
      writeStream.once('drain', writing);
    }
  }
  writing();
};

stream.write(
  `productName, category, color, price, photoUrl, totalReviews, averageRating\n`,
  'utf-8'
);
startWriting(stream, 'utf-8', () => {
  stream.end();
});
