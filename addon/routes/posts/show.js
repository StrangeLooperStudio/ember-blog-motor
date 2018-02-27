import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(params) {
    // const slugRegex = /\d+$/;
    // const id = slugRegex.exec(params.post_id)[0];
    const id = params.post_id;

    const post = this.get('store').findRecord('post', id );

    if(!post.get('isPublished')){
      this.transitionTo('posts.index');
    }

    return post;
  },

  // serializers are not supported in engines yet
  // https://github.com/emberjs/rfcs/pull/120
  // serialize(model) {
  //   return { post_id: `${model.title}-${model.id}` };
  // }
});
