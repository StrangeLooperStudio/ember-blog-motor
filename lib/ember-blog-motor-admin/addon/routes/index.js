import Route from 'ember-blog-motor-lib/routes/post-list';

export default Route.extend({
  model(params) {
    return this.store.query('post', { page: params.page, size: params.size });
  }
});
