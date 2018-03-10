import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'ember-get-config';

const AUTHORMODEL = config.EmberBlogMotor.authorModel;

export default Route.extend({
  store: service(),
  session: service(),

  model() {
    return this.store.findRecord(AUTHORMODEL, this.session.userId)
    .then( author => this.get('store').createRecord('post', { author }));
  },

  resetController(controller, isExiting) {
    if(isExiting && controller.model.isNew ) {
      controller.model.destroyRecord();
    }
  }

});
