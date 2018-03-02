import {
  create,
  visitable,
  clickable,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/admin'),
  new: visitable('/admin/posts/new'),
  loginAlice: clickable('[data-test-login-alice]'),
  firstTitle: text('[data-test-post-id="1"] a'),
  firstPublished: text('[data-test-is-published]')
});
