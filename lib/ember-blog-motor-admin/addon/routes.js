import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('posts', { path: '/posts'}, function() {
    this.route('new', { path: '/new'});
    this.route('edit', { path: '/:post_id' });
  });
});
