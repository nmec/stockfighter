'use strict';

const API = require('./api');

class Level extends API {

  constructor(key) {
    super(key, 'game');
  }

  start(level) {
    return this.http('POST', `levels/${level}`)
    .then(res => {
      this.instance = res.instanceId;
      delete res.instructions;
      return res;
    }).bind(this);
  }

  stop() {
    return this.http('POST', `instances/${this.instance}/stop`);
  }

  restart() {
    return this.http('POST', `instances/${this.instance}/restart`);
  }

  resume() {
    return this.http('POST', `instances/${this.instance}/resume`);
  }

  status() {
    return this.http('GET', `instances/${this.instance}`);
  }

  list() {
    return this.http('GET', 'levels');
  }
}

module.exports = Level;
