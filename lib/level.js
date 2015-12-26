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

  saveInstance(res) {
    delete res.instructions;
    this.level = res;
    return res;
  }

  start(level) {
    return this.http('POST', `levels/${level}`)
      .then(this.saveInstance.bind(this));
  }

  stop() {
    return this.http('POST', `instances/${this.level.instanceId}/stop`);
  }

  restart() {
    return this.http('POST', `instances/${this.level.instanceId}/restart`)
      .then(this.saveInstance.bind(this));
  }

  resume() {
    return this.http('POST', `instances/${this.level.instanceId}/resume`)
      .then(this.saveInstance.bind(this));
  }

  status() {
    return this.http('GET', `instances/${this.level.instanceId}`)
    .then(this.saveInstance.bind(this));
  }

  info() {
    return this.level;
  }

  list() {
    return this.http('GET', 'levels');
  }
}

module.exports = Level;
