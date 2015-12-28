'use strict';

const co = require('co');
const debounce = require('lodash/function/debounce');
const util = require('../../lib/util');

module.exports = co.wrap(function*(level, stocks) {
  const info = yield level.info();
  const venue = info.venues[0];
  const stock = info.tickers[0];
  const targetBalance = 10000;
  const maxExposure = 1000;
  const spreadInc = 0.0025;
  const spreadSize = 3;

  let cash = 0;
  let dailyBids = [];
  let orders = [];

  const baseOrder = {
    account: info.account,
    venue: venue,
    stock: stock
  };

  const ticker = stocks.ticker(info.account, venue);
  const execs = stocks.execs(info.account, venue);

  const eod = () => {
    const dailyMedBid = ~~util.med(dailyBids);

    dailyBids = [];

    if ( orders.length ) { return; }

    let spread = [];

    for (let i = 1; i <= spreadSize; i++) {
      let diff = Math.ceil(dailyMedBid * (i * spreadInc));
      spread.push(dailyMedBid + diff, dailyMedBid - diff);
    }

    spread.forEach(price => {

      const order = {
        price: price,
        orderType: 'limit',
        qty: Math.floor(maxExposure / spreadSize)
      };

      stocks.sendOrder(Object.assign({}, baseOrder, order, {
        direction: 'buy'
      })).then(orders.push)
      .catch(() => {});

      stocks.sendOrder(Object.assign({}, baseOrder, order, {
        direction: 'sell'
      })).then(orders.push)
      .catch(() => {});

    });

  };

  ticker.on('data', data => {
    if ( data.quote.bid ) {
      dailyBids.push(data.quote.bid);
    }
  });

  ticker.on('data', debounce(eod, 3000) );

  execs.on('data', () => {

   orders.forEach(order => {
    stocks.cancelOrder(venue, stock, order.id);
   });

   orders = [];

    if ( cash >= targetBalance ) {
      process.exit();
    }
  });

});
