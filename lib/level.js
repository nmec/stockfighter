'use strict';

const API = require('./api');

class Level extends API {

  constructor(key, instanceId) {
    super(key, 'game');

    if ( instanceId ) {
      this.level = {
        instanceId: instanceId
      };
    }
  }

  start(level) {
    return this.http('POST', `levels/${level}`)
    .then(res => {
      delete res.instructions;
      this.level = res;
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

  info() {
    return this.level;
  }

  list() {
    return this.http('GET', 'levels');
  }
}

module.exports = Level;
