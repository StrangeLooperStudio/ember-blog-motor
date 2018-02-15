import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('post', { path: '/post/:id'});
  this.mount('ember-blog-motor-admin', { path: '/admin' });
});
