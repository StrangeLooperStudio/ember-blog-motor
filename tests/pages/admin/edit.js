import {
  create,
  visitable,
  fillable,
  clickable,
  property
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/admin/posts/1'),
  title: fillable('[data-test-title] input'),
  body: fillable('[data-test-body] textarea'),
  save: clickable('[data-test-save]'),
  cancel: clickable('[data-test-cancel]'),
  togglePublished: clickable('[data-test-is-published] input'),
});
