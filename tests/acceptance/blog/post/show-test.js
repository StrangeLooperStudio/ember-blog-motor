import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import single from 'dummy/mirage/scenarios/single-post';

module('Acceptance | blog/posts/show', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /blog/posts/show', async function(assert) {
    single(this.server);
    await visit('/blog/posts/-1');

    assert.equal(currentURL(), '/blog/posts/-1');
  });
});
