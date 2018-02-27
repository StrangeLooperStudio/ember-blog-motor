import Controller from '@ember/controller';
import { bind as runBind } from '@ember/runloop';

export default Controller.extend({
  post: null,

  actions: {
    save() {
      this.model.save().then(()=>this.transitionToRoute('index'));
    },
    cancel() {
      this.transitionToRoute('index');
    }
  }
});
