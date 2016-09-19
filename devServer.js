/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const Express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack/dev');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const compression = require('compression');

const app = new Express();

app.use(Express.static(path.join(__dirname, './public')));
app.use(compression());

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(middleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(hotMiddleware(compiler));
}

app.listen(3030, '0.0.0.0', () => {
  console.log('Dev Server: 3030'); //eslint-disable-line
});

