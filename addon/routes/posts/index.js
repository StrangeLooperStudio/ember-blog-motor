import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  queryParams: {
      page: { refreshModel: true },
      size: { refreshModel: true }
  },

  store: service(),

  model(params) {
    return this.get('store').query('post', { isPublished: true, page: params.page, size: params.size });
  }
});
