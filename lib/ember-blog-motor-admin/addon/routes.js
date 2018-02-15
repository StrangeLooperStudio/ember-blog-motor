import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('post', { path: 'post/:id'}, function() {
    this.route('edit');
  });

  this.route('new');
});
