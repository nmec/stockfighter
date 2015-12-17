'use strict';

const api = require('./api');

let Stocks = {};

Stocks.all = (venue) => {
  return api.http('GET', `venues/${venue}/stocks`);
};

Stocks.orders = (venue, stock) => {
  return api.http('GET', `venues/${venue}/stocks/${stock}`);
};

Stocks.quote = (venue, stock) => {
  return api.http('GET', `venues/${venue}/stocks/${stock}/quote`);
};

Stocks.ticker = (account, venue) => {
  return api.ws(`${account}/venues/${venue}/tickertape`);
};

module.exports = Stocks;
