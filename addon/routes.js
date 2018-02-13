import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('post', { path: 'post/:id'}, function() {
    this.route('new');
    this.route('edit', { path: 'edit/:id'});
  });

  this.route('post', { path: 'post/:id'});
});
