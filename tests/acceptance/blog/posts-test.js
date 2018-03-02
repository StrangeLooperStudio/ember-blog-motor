import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import page from 'dummy/tests/pages/blog/posts';
import defaultScenario from 'dummy/mirage/scenarios/default';

module('Acceptance | blog/posts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /blog/posts', async function(assert) {
    defaultScenario(this.server);

    await page.visit();
    assert.equal(currentURL(), '/blog/posts');
    assert.ok(page.firstLinkIsActive);
    assert.ok(page.secondLinkIsVisible);
    assert.ok(page.lastLinkIsVisible);
    await page.secondLink();
    assert.equal(currentURL(), '/blog/posts?page=2');
    assert.ok(page.secondLinkIsActive);
  });
});
