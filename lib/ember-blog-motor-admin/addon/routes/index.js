import Route from 'ember-blog-motor/routes/posts/index';

export default Route.extend({
  model(params) {
    return this.store.query('post', { page: params.page, size: params.size });
  }
});
