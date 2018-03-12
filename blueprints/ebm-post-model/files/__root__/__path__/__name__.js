import DS from 'ember-data';
import config from 'ember-get-config';
import { computed } from '@ember/object';
import { dasherize } from '@ember/string';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  isPublished: DS.attr('boolean'),
  publishedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  author: DS.belongsTo(config.EmberBlogMotor.authorModel),
  nextPost: DS.belongsTo('post', {inverse: 'previousPost'}),
  previousPost: DS.belongsTo('post', {inverse: 'nextPost'}),

  post_slug: computed('title', 'id', function() {
    return `${dasherize(this.title || '')}-${this.id}`;
  })
});
