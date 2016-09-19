/* eslint-disable import/no-extraneous-dependencies */
const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(base, {
  entry: {
    main: [
      './src/polyfills.js',
      './src/index.prod.js',
    ],
  },
  devtool: 'hidden-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
  ],
});
