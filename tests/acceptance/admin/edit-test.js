import { module, test } from 'qunit';
import { currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import single from 'dummy/mirage/scenarios/single-post';
import admin from 'dummy/tests/pages/admin';
import edit from 'dummy/tests/pages/admin/edit';

module('Acceptance | admin/edit', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /admin/posts/1', async function(assert) {
    single(server);
    await admin.visit().loginAlice();
    await edit.visit();

    assert.equal(currentURL(), '/admin/posts/1');
  });

  test('cancel edit', async function(assert) {
    single(server);
    await admin.visit().loginAlice();
    await edit.visit().title('test1').cancel();

    assert.equal(currentURL(), '/admin');
    assert.notEqual(admin.firstTitle, 'test1');
  });

  test('save edit', async function(assert) {
    single(server);
    await admin.visit().loginAlice();
    await edit.visit().title('test1').togglePublished().save();

    assert.equal(currentURL(), '/admin');
    assert.equal(admin.firstTitle, 'test1');
    assert.equal(admin.firstPublished, 'false');

  });
});
