import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {

  this.route('posts', { path: '/posts'}, function() {
    this.route('posts/show', { path: '/posts/:post_id' });
  });

  this.mount('ember-blog-motor-admin', { path: '/admin' });
});
