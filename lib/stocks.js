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

Stocks.sendOrder = (venue, stock, body) => {
	return api.http('POST', `venues/${venue}/stocks/${stock}/orders`, body);
};

Stocks.getOrder = (venue, stock, order) => {
	return api.http('GET', `venues/${venue}/stocks/${stock}/orders/${order}`);
};

Stocks.cancelOrder = (venue, stock, order) => {
	return api.http('DELETE', `venues/${venue}/stocks/${stock}/orders/${order}`);
};

Stocks.getOrders = (venue, account) => {
  return api.http('GET', `venues/${venue}/accounts/${account}/orders`);
};

Stocks.getStockOrders = (venue, account, stock) => {
  return api.http('GET', `venues/${venue}/accounts/${account}/stocks/${stock}/orders`);
};

Stocks.ticker = (account, venue) => {
  return api.ws(`${account}/venues/${venue}/tickertape`);
};

Stocks.execs = (account, venue) => {
  return api.ws(`${account}/venues/${venue}/executions`);
};

module.exports = Stocks;
