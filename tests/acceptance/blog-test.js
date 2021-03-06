import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import page from 'dummy/tests/pages/blog';
import scenario from 'dummy/mirage/scenarios/hundred-posts';

module('Acceptance | blog', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /blog', async function(assert) {
    scenario(this.server);
    await page.visit();

    assert.equal(currentURL(), '/blog');
    assert.ok(page.previous);
    assert.notOk(page.nextLink);
  });

  test('visiting previous blog post', async function(assert) {
    scenario(this.server);
    await page.visit();
    await page.previousLink();

    assert.ok(/^\/blog\/posts\/(.*)$/.test(currentURL()));
    assert.ok(page.previous);
    assert.ok(page.nextLink);
  });
});
