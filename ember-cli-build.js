'use strict';
const config = require('./tests/dummy/config/environment')();

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    assetLoader: {
      generateURI: function(filePath) {
        return `${config.rootURL}${filePath}`;
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('node_modules/normalize.css/normalize.css');

  return app.toTree();
};
