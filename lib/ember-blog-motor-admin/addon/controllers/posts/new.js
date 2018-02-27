import Controller from '@ember/controller';

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
