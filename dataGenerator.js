// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

// creates random num between min/max optionally rounded to tens place
const getRandomNum = (min, max, rounded = false) => {
  const randInt = faker.random.number({
    min,
    max,
  });
  return rounded ? Math.ceil(randInt / 10) * 10 : randInt;
};

const createSkus = () => {
  const shoeSizes = [
    'M 5 / W 6', 'M 6 / W 7', 'M 7 / W 8', 'M 7.5 / W 8.5',
    'M 8 / W 9', 'M 8.5 / W 9.5', 'M 9 / W 10', 'M 9.5 / W 10.5',
    'M 10 / W 11', 'M 10.5 / W 11.5', 'M 11 / W 12', 'M 11.5 / W 12.5',
    'M 12 / W 13', 'M 12.5 / W 13.5', 'M 13 / W 14', 'M 14 / W 15',
  ];

  const sku = [];
  shoeSizes.forEach((size) => {
    const stock = getRandomNum(0, 20);
    sku.push({ size, stock });
  });
  return sku;
};

const getRandomElement = (array) => array[Math.floor(array.length * Math.random())];

// returns properly capitalized first word;
const capitalize = (string) => {
  const split = string.split(' ');
  // eslint-disable-next-line prefer-destructuring
  const newString = split[0];
  return newString.charAt(0).toUpperCase() + string.slice(1);
};

const createShoes = (quantity) => {
  const categories = ['Originals', 'Performance', 'Running', 'Hiking', 'Essentials', 'Lifestyle', 'Basketball', 'Workout', 'Gym', 'Clean Classics'];
  const shoeName = ['NMD_R1 SHOES', 'ULTRABOOST SHOES', 'ULTRABOOST ST SHOES', 'ULTRABOOST DNA SHOES', 'ULTRABOOST WINTER.RDY SHOES', 'BUSENITZ PRO SHOES', 'NIZZA TREFOIL SHOES', 'ZX 2K BOOST SHOES', 'OZWEEGO SHOES', 'NMD_R1 V2 SHOES', 'ULTRABOOST LTD SHOES', 'ULTRABOOST 20 SHOES', 'ADILETTE COMFORT SLIDES', 'SUN DEVILS ULTRABOOST 1.0 DNA SHOES', 'ULTRABOOST DNA X REAL MADRID SHOES'];
  const listOfProductDocuments = [];
  const { commerce } = faker;

  for (let i = 0; i < quantity; i += 1) {
    const productDocument = {
      name: getRandomElement(shoeName),
      id: i,
      category: getRandomElement(categories),
      color: `${commerce.productAdjective()} ${capitalize(commerce.color())} / ${capitalize(commerce.color())} ${commerce.productAdjective()} / ${commerce.productAdjective()} ${capitalize(commerce.color())}`,
      price: getRandomNum(100, 200, true),
      photoUrl: 'url',
      numOfReviews: getRandomNum(10, 300),
      averageRating: faker.finance.amount(4, 5, 1),
      skus: createSkus(),
    };
    listOfProductDocuments.push(productDocument);
  }

  return listOfProductDocuments;
};

module.exports.createShoes = createShoes;
