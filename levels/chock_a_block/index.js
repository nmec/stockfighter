'use strict';

const co = require('co');
const debounce = require('lodash/function/debounce');
const util = require('../../lib/util');

module.exports = co.wrap(function*(level, stocks) {
  const info = yield level.info();
  const venue = info.venues[0];
  const stock = info.tickers[0];

  let maxQty = 10000;
  let unfilled = 100000;
  let dailyAsks = [];

  const baseOrder = {
    account: info.account,
    venue: venue,
    stock: stock,
    direction: 'buy',
    orderType: 'immediate-or-cancel'
  };

  let status = yield level.status();

  if ( !status.flash ) {
    yield stocks.sendOrder(Object.assign({}, baseOrder, {
      qty: 1,
      orderType: 'market'
    }));
    status = yield level.status();
  }

  const targetRegex = /target price is \$(.*)\./;
  const filledRegex = /purchased (\d+) shares/;
  const targetAvg = ~~status.flash.info.match(targetRegex)[1].replace('.', '');
  const filled = ~~status.flash.info.match(filledRegex)[1];
  unfilled = unfilled - filled;

  if ( maxQty > unfilled ) {
    maxQty = unfilled;
  }

  const ticker = stocks.ticker(info.account, venue);
  const execs = stocks.execs(info.account, venue);

  const eod = () => {
    const minAsk = util.min(dailyAsks);

    if ( unfilled > 0 && minAsk < targetAvg ) {
      console.log(`Buy ${maxQty.toLocaleString()} @ ${util.fmt(minAsk)}`);
      stocks.sendOrder(Object.assign({}, baseOrder, {
        price: minAsk,
        qty: maxQty
      }));
    }

    dailyAsks = [];
  };

  ticker.on('data', data => {
    if ( data.quote.ask ) {
      dailyAsks.push(data.quote.ask);
    }
  });

  ticker.on('data', debounce(eod, 3000) );

  execs.on('data', data => {
    unfilled = unfilled - data.order.totalFilled;

    if ( maxQty > unfilled ) {
      maxQty = unfilled;
    }

    console.log(`Filled ${data.order.totalFilled.toLocaleString()} @ ${util.fmt(data.order.price)}, ${unfilled.toLocaleString()} remaining`);

    if ( unfilled <= 0 ) {
      process.exit();
    }
  });

});
