import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  templateName: 'posts/new',
  controllerName: 'posts.new',

  store: service(),

  model(params) {
    return this.get('store').findRecord('post', params.post_id );
  },

  resetController(controller, isExiting) {
    if(isExiting && controller.model.isDirty ) {
      controller.model.rollback();
    }
  }
});
