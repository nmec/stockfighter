'use strict';

const api = require('./api');

let Status = {};

Status.api = () => {
  return api.http('GET', 'heartbeat')
  .then(res => {
    return !!res.ok;
  });
};

Status.venue = code => {
  return api.http('GET', `venues/${code}/heartbeat`)
  .then(res => {
    return !!res.ok;
  });
};

module.exports = Status;
