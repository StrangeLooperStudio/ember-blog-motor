import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user'),
  nextPost: belongsTo('post', {inverse: 'previousPost'}),
  previousPost: belongsTo('post', {inverse: 'nextPost'})
});
