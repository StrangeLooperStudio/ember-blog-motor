import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import page from 'dummy/tests/pages/admin';
import single from 'dummy/mirage/scenarios/single-post';

module('Acceptance | admin', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /admin', async function(assert) {
    single(this.server);
    
    await page.visit().loginAlice();

    assert.equal(currentURL(), '/admin');
  });
});
