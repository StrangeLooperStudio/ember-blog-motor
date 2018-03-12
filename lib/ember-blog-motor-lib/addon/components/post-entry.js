import Component from '@ember/component';
import layout from '../templates/components/post-entry';
import config from 'ember-get-config';

export default Component.extend({
  tagName: 'article',
  classNames: ['post-entry'],
  layout,
  dateFormat: config.EmberBlogMotor.dateFormat,
  prevText: config.EmberBlogMotor.links.previous,
  nextText: config.EmberBlogMotor.links.next
})
