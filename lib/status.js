'use strict';

const API = require('./api');

class Status extends API {

  api() {
    return this.http('GET', 'heartbeat')
    .then(res => {
      return !!res.ok;
    });
  }

  venue(code) {
    return this.http('GET', `venues/${code}/heartbeat`)
    .then(res => {
      return !!res.ok;
    });
  }
}

module.exports = Status;
