'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-blog-motor',

  //eslint-disable-next-line
  lazyLoading: { enabled: true },

  afterInstall() {
    this._super.afterInstall.apply(this, arguments);
    this.ui.writeLine('Run `ember g ebm-post-model to import the default `post` model into your app.');
  }
});
