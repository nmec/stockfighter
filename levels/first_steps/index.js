'use strict';

const co = require('co');

module.exports = co.wrap(function*(level, stocks) {
  const info = yield level.info();

  const order = yield stocks.sendOrder({
    account: info.account,
    venue: info.venues[0],
    stock: info.tickers[0],
    direction: 'buy',
    qty: 100,
    orderType: 'market'
  });

  console.log(order);
});
