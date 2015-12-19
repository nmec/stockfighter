'use strict';

const API = require('./api');

class Stocks extends API {

  allStocks(venue) {
    return this.http('GET', `venues/${venue}/stocks`);
  }

  allOrders(venue, stock) {
    return this.http('GET', `venues/${venue}/stocks/${stock}`);
  }

  getQuote(venue, stock) {
    return this.http('GET', `venues/${venue}/stocks/${stock}/quote`);
  }

  sendOrder(order) {
    return this.http('POST', `venues/${order.venue}/stocks/${order.stock}/orders`, order);
  }

  getOrder(venue, stock, order) {
    return this.http('GET', `venues/${venue}/stocks/${stock}/orders/${order}`);
  }

  cancelOrder(venue, stock, order) {
    return this.http('DELETE', `venues/${venue}/stocks/${stock}/orders/${order}`);
  }

  getOrders(venue, account) {
    return this.http('GET', `venues/${venue}/accounts/${account}/orders`);
  }

  getStockOrders(venue, account, stock) {
    return this.http('GET', `venues/${venue}/accounts/${account}/stocks/${stock}/orders`);
  }

  ticker(account, venue) {
    return this.ws(`${account}/venues/${venue}/tickertape`);
  }

  execs(account, venue) {
    return this.ws(`${account}/venues/${venue}/executions`);
  }
}

module.exports = Stocks;
