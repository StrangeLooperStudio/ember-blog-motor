import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model() {
    return this.get('store').query('post', { page: { nuber: 1, size: 10 } });
  }
});
