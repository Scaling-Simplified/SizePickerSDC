module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  watchPathIgnorePatterns: ['globalConfig'],
  testMatch: [`${__dirname}/*.test.js`],
};
