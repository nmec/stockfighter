'use strict';

require('dotenv').load();

const status = require('./lib/status');

status.api().then(res => {
  const apiStatus = (res) ? 'up' : 'down';
  console.log( `API is ${apiStatus}` );
});
