/* eslint-disable import/no-extraneous-dependencies */
const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(base, {
  entry: {
    main: [
      'loud-rejection/register',
      './src/polyfills.js',
      'mobx-react-devtools',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/index.dev.js',
    ],
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
