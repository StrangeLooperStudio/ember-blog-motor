import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('posts', { path: '/posts'}, function() {
    this.route('edit', { path: '/:post_id' });
  });


  this.route('new');
});
