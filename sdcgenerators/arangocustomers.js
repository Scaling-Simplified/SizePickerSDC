const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 100;
const filename = argv.output || 'arangocustomers.json';
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

const generateObject = () => {
  const randomFirst = getRandomNum(1, 10000000);
  const randomSecond = getRandomNum(1, 10000000);
  const randomThird = getRandomNum(1, 10000000);

  const result = {};

  result[randomFirst] = {
    quantity: getRandomNum(1, 100),
    dateAdded: getRandomDate(),
  };

  result[randomSecond] = {
    quantity: getRandomNum(1, 100),
    dateAdded: getRandomDate(),
  };

  result[randomThird] = {
    quantity: getRandomNum(1, 100),
    dateAdded: getRandomDate(),
  };

  return result;
};

const createCustomer = (num) => {
  const result = {
    _key: num.toString(),
    customerId: num,
    customerUsername: faker.internet.userName(),
    customerEmail: faker.internet.email(),
    customerCart: generateObject(),
  };

  return `${JSON.stringify(result)}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;

  function writing() {
    const canWrite = true;
    let num = 1;
    do {
      i -= 1;
      const product = createCustomer(num);
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
