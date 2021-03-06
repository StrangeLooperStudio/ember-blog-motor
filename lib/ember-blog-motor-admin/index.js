/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-blog-motor-admin',

  //eslint-disable-next-line
  lazyLoading: {
    enabled: true
  },

  isDevelopingAddon() {
    return true;
  }
});
