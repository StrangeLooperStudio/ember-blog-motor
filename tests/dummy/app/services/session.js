import SessionService from 'ember-simple-auth/services/session';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default SessionService.extend({
    emberData: service('store'),
    isAdmin: computed.alias('data.authenticated.isAdmin'),
    user: null,

    init() {
      this._super(...arguments);
      this.on('authenticationSucceeded', () => {
        this.set('user', this.emberData.findRecord('user', this.data.authenticated.user_id))
      })
    }
});
