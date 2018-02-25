import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(params) {
    const post = this.get('store').findRecord('post', params.post_id );

    if(!post.get('isPublished')){
      this.transitionTo('posts.index');
    }

  }
});
