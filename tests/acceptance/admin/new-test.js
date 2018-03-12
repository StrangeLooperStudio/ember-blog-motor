import { module, test } from 'qunit';
import {  currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import admin from 'dummy/tests/pages/admin';
import single from 'dummy/mirage/scenarios/single-post';

module('Acceptance | admin/new', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /admin/new', async function(assert) {
    single(this.server);
    await admin.new().loginAlice();

    assert.equal(currentURL(), '/admin/posts/new');
  });
});
