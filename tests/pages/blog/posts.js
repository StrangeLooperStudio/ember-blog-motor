import {
  create,
  clickable,
  visitable,
  isVisible,
  hasClass,
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/blog/posts'),
  firstLinkIsActive: hasClass('active', '[data-test-first] a'),
  lastLinkIsVisible: isVisible('[data-test-last] a'),
  secondLinkIsVisible: isVisible('[data-test-page="2"] a'),
  secondLink: clickable('[data-test-page="2"] a'),
  secondLinkIsActive: hasClass('active', '[data-test-page="2"] a')
});
