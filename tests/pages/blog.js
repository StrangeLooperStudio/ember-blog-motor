import {
  create,
  clickable,
  isPresent,
  isVisible,
  visitable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/blog'),
  previous: isVisible('[data-test-previous] a'),
  previousLink: clickable('[data-test-previous] a'),
  nextLink:  isPresent('[data-test-next] a')
});
