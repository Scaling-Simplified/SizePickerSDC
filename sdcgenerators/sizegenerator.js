const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');
const fakeData = require('./fakedata');

const lines = argv.lines || 100;
const filename = argv.output || 'sizes.csv';
const stream = fs.createWriteStream(filename);

// const getRandomElement = (array) => array[Math.floor(array.length * Math.random())];

const getRandomNum = (min, max, rounded = false) => {
  const randInt = faker.random.number({
    min,
    max,
  });
  return rounded ? Math.ceil(randInt / 10) * 10 : randInt;
};

const createSizes = (num) => {
  let iteration = 0;
  let string = '';

  while (iteration < 19) {
    const productId = num;
    const size = fakeData.shoeSizes[iteration];
    const quantity = getRandomNum(10, 50);
    string += `${productId},${size},${quantity}\n`;
    iteration += 1;
  }
  return string;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;

  function writing() {
    const canWrite = true;
    let currentSize = 1;
    do {
      i -= 1;
      const product = createSizes(currentSize);
      currentSize += 1;
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

stream.write(`productId,size,quantity\n`, 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
