import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(params) {
    const slugRegex = /\d+$/;
    const id = slugRegex.exec(params.post_slug)[0];

    return this.get('store').findRecord('post', id ).then((post)=>{
      if(!post.get('isPublished')){
        this.transitionTo('posts.index');
      }
      return post;
    })

  }
});
