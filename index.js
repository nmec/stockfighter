'use strict';

require('dotenv').load();
const Level = require('./lib/level');
const Stocks = require('./lib/stocks');

const key = process.env.API_KEY;
const levelName = process.argv[2];

const game = new Level(key);
const stocks = new Stocks(key);
const playLevel = require(`./levels/${levelName}`);

game.start(levelName).then(() => {
  playLevel(game, stocks);
});
})
.catch(console.error);
