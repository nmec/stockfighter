'use strict';

const events = require('events');
const WebSocket = require('ws');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));
Promise.promisifyAll(request);

const httpEndpoint = 'https://api.stockfighter.io/';
const wsEndpoint = 'wss://api.stockfighter.io/ob/api/ws/';

class API {

  constructor(key, type) {
    this.key = key;

    switch (type) {
      case 'game':
        this.path = 'gm/';
      break;

      case 'stock':
      default:
        this.path = 'ob/api/';
      break;
    }
  }

  http(method, url, body) {
    let params = {
      url: httpEndpoint + this.path + url,
      method: method,
      headers: {
        'X-Starfighter-Authorization': this.key
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
  }

  ws(url) {
    const ws = new WebSocket(wsEndpoint + url);
    const ev = new events.EventEmitter;

    ws.on('message', msg => {
      const data = JSON.parse(msg);
      ev.emit('data', data);
    });

    return ev;
  }

}

module.exports = API;
