import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.belongsTo('user'),
  body: DS.attr('string'),
  isPublished: DS.attr('boolean'),
  publishedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
