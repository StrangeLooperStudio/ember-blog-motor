import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    login(user) {
      this.get('session').authenticate('authenticator:oauth2', user, null).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
