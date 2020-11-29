module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  globals: {
    window: true,
    document: true,
  },
};
