const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public'); // where we will place our bundled file
const APP_DIR = path.resolve(__dirname, 'client'); // where the pre-transpiled components live

module.exports = {
  mode: 'production',
  entry: `${APP_DIR}/index.jsx`, // need to reference the point where we call reactdom.render
  output: {
    path: BUILD_DIR, // where we want to put bundle.js usually wherever index.html is
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    ],
  },
  watch: false,
  resolve: { extensions: ['.js', '.jsx'] },
};
