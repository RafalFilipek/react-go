/* eslint-disable global-require */
import 'isomorphic-fetch';

if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions');
}
