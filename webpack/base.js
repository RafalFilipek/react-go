const path = require('path');

module.exports = {
  output: {
    path: path.resolve('./dist/static'),
    publicPath: '/static/',
    library: 'App',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
};
