/*jshint node:true*/
'use strict';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-blog-motor-admin',
    environment: environment,
    showdown: {
      emoji: true
    }
  };

  return ENV;
};
