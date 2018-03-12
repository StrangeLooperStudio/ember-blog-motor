import SessionService from 'ember-simple-auth/services/session';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default SessionService.extend({
    emberData: service('store'),
    isAdmin: computed.alias('data.authenticated.isAdmin'),
    userId: computed.alias('data.authenticated.user_id')
});
