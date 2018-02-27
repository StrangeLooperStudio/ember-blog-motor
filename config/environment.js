'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'ember-blog-motor',
    environment: environment,
    showdown: {
      emoji: true
    }
  }

  return ENV;
};
