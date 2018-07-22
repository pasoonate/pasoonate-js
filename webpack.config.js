const path = require('path');

module.exports = {
  entry: './src/Pasoonate.js',
  output: {
    filename: 'pasoonate.js',
    path: path.resolve(__dirname, 'dist')
  }
};
