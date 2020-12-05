const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 100;
const filename = argv.output || 'cart.csv';
const stream = fs.createWriteStream(filename);

const getRandomNum = (min, max, rounded = false) => {
  const randInt = faker.random.number({
    min,
    max,
  });
  return rounded ? Math.ceil(randInt / 10) * 10 : randInt;
};

const getRandomDate = () => {
  const month = getRandomNum(1, 12);
  const day = getRandomNum(1, 30);

  return `${month}/${day}/2020`;
};

const createCart = (num) => {
  let iteration = 0;
  let string = '';

  while (iteration < 3) {
    const customerId = num;
    const productId = getRandomNum(1, 100000000);
    const quantity = getRandomNum(1, 20);
    const dateAdded = getRandomDate();
    string += `${customerId}, ${productId}, ${quantity}, ${dateAdded}\n`;
    iteration += 1;
  }
  return string;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;

  function writing() {
    const canWrite = true;
    let currentCart = 1;
    do {
      i -= 1;
      const product = createCart(currentCart);
      currentCart += 1;
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

stream.write(`customerId, productId, quantity, dateAdded\n`, 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
