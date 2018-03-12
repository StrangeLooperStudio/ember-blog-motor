import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('ember-blog-motor', { path: '/blog' });
  this.route('authenticated', { path: '' }, function() {
    this.mount('ember-blog-motor-admin', { path: '/admin' });
  });

  this.route('index', { path: '/' });
  this.route('login');
});

export default Router;
