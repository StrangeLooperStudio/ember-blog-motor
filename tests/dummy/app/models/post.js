import DS from 'ember-data';
import config from 'ember-get-config';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  isPublished: DS.attr('boolean'),
  publishedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  author: DS.belongsTo(config.APP.EmberBlogMotor.authorModel),
  nextPost: DS.belongsTo('post', {inverse: 'previousPost'}),
  previousPost: DS.belongsTo('post', {inverse: 'nextPost'})
});
