module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
  },
  testMatch: [`${__dirname}/*.test.jsx`],
  watchPathIgnorePatterns: ['globalConfig'],
};
