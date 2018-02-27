/* eslint-env node */
'use strict';

const path = require('path');

module.exports = {
  description: 'Generates a `post.js` model file in your app.',
  normalizeEntityName() {
    return 'post';
  },

  fileMapTokens() {
    return {
      __path__(options) {
        if (options.pod && options.hasPathToken) {
          return path.join(options.podPath, 'post');
        }
        return 'models';
      },
      __name__(options) {
        if (options.pod && options.hasPathToken) {
          return 'model';
        }
        return 'post';
      }
    }
  },

  afterInstall() {
    return this.addAddonToProject('ember-get-config');
  }
};
