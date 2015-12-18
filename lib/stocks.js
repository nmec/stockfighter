'use strict';

const api = require('./api');

let Stocks = {};

Stocks.allStocks = (venue) => {
  return api.http('GET', `venues/${venue}/stocks`);
};

Stocks.allOrders = (venue, stock) => {
  return api.http('GET', `venues/${venue}/stocks/${stock}`);
};

Stocks.getQuote = (venue, stock) => {
  return api.http('GET', `venues/${venue}/stocks/${stock}/quote`);
};

Stocks.ticker = (account, venue) => {
  return api.ws(`${account}/venues/${venue}/tickertape`);
};

module.exports = Stocks;
