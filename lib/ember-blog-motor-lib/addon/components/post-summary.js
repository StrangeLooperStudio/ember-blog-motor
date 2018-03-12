import Component from '@ember/component';
import layout from '../templates/components/post-summary';
import config from 'ember-get-config';

export default Component.extend({
  tagName: 'li',
  classNames: ['post-summary'],
  layout,
  dateFormat: config.EmberBlogMotor.dateFormat
})
