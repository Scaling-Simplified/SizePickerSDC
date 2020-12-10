const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 100;
const filename = argv.output || 'customers.csv';
const stream = fs.createWriteStream(filename);

const createProduct = () => {
  const customerName = faker.name.firstName();
  const customerEmail = faker.internet.email();

  return `${customerName},${customerEmail}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;

  function writing() {
    const canWrite = true;
    do {
      i -= 1;
      const product = createProduct();
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

stream.write(`customerName,customerEmail\n`, 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
