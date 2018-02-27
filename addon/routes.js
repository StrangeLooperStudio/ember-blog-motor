import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {

  this.route('posts', { path: '/posts'}, function() {
    this.route('show', { path: '/:post_slug', seriaize: function(model) {
      return `${model.title}-${model.id}`;
    }});
  });

});
