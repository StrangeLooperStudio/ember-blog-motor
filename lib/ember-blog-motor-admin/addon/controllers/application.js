import Controller from '@ember/controller';
import { computed } from '@ember/object';
import config from 'ember-get-config';

export default Controller.extend({
  config: config.EmberBlogMotor,
  showHeader: computed.and('config.{showTitle,showNav}')
})
