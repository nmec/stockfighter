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

API.http = (method, url, body) => {
  let params = {
    url: httpEndpoint + url,
    method: method,
    headers: {
      'X-Starfighter-Authorization': key
    }
  };

  if ( body ) {
    params.body = body;
    params.json = true;
  }

  return request(params)
  .then(res => {
    if ( typeof res.body === 'string' ) {
      return JSON.parse(res.body);
    } else {
      return res.body;
    }
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
