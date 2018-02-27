import Component from '@ember/component';
import layout from '../templates/components/post-entry';
import config from 'ember-get-config';

export default Component.extend({
  tagName: 'article',
  classNames: ['post-entry'],
  layout,
  dateFormat: config.APP.EmberBlogMotor.dateFormat
})
