'use strict';

const events = require('events');
const WebSocket = require('ws');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));
Promise.promisifyAll(request);

const httpEndpoint = 'https://api.stockfighter.io/ob/api/';
const wsEndpoint = 'wss://api.stockfighter.io/ob/api/ws/';
const key = process.env.API_KEY;

let API = {};

API.http = (method, url) => {
  return request({
    url: httpEndpoint + url,
    method: method,
    headers: {
      'X-Starfighter-Authorization': key
    }
  })
  .then(res => {
    return JSON.parse(res.body);
  });
};

API.ws = url => {
  const ws = new WebSocket(wsEndpoint + url);
  const ev = new events.EventEmitter;

  ws.on('message', msg => {
    const data = JSON.parse(msg);
    ev.emit('quote', data);
  });

  return ev;
};

module.exports = API;
