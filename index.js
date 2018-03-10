'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-blog-motor',

  //eslint-disable-next-line
  lazyLoading: { enabled: true },

  afterInstall() {
    this._super.afterInstall.apply(this, arguments);
    this.ui.writeLine('Run `ember g ebm-post-model to import the default `post` model into your app.');
  },

  config() {
    return {
      EmberBlogMotor: {
        sessionService: 'session',
        authorModel: 'user',
        authorNameField: 'name',
        showTitle: true,
        title: 'Ember-Blog-Motor (An Engine Addon)',
        showNav: true,
        showAdminTitle: true,
        adminTitle: 'Ember-Blog-Motor-Admin (An Engine In-Repo-Addon)',
        showAdminNav: true,
        dateFormat: 'L',
        links: {
          blogHome: 'Blog Home',
          allBlogPosts: 'Blog Posts',
          admin: 'Admin',
          adminAllPosts: 'Blog Posts',
          adminNew: 'Create New Post',
          previous: 'Previous',
          next: 'Next'
        }
      }
    }
  }
});
