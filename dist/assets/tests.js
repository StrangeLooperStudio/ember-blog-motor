'use strict';

define('dummy/tests/acceptance/admin-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'dummy/tests/pages/admin', 'dummy/mirage/scenarios/single-post'], function (_qunit, _testHelpers, _emberQunit, _admin, _singlePost) {
  'use strict';

  (0, _qunit.module)('Acceptance | admin', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('visiting /admin', async function (assert) {
      (0, _singlePost.default)(this.server);

      await _admin.default.visit().loginAlice();

      assert.equal((0, _testHelpers.currentURL)(), '/admin');
    });
  });
});
define('dummy/tests/acceptance/admin/edit-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'dummy/mirage/scenarios/single-post', 'dummy/tests/pages/admin', 'dummy/tests/pages/admin/edit'], function (_qunit, _testHelpers, _emberQunit, _singlePost, _admin, _edit) {
  'use strict';

  (0, _qunit.module)('Acceptance | admin/edit', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('visiting /admin/posts/1', async function (assert) {
      (0, _singlePost.default)(server);
      await _admin.default.visit().loginAlice();
      await _edit.default.visit();

      assert.equal((0, _testHelpers.currentURL)(), '/admin/posts/1');
    });

    (0, _qunit.test)('cancel edit', async function (assert) {
      (0, _singlePost.default)(server);
      await _admin.default.visit().loginAlice();
      await _edit.default.visit().title('test1').cancel();

      assert.equal((0, _testHelpers.currentURL)(), '/admin');
      assert.notEqual(_admin.default.firstTitle, 'test1');
    });

    (0, _qunit.test)('save edit', async function (assert) {
      (0, _singlePost.default)(server);
      await _admin.default.visit().loginAlice();
      await _edit.default.visit().title('test1').togglePublished().save();

      assert.equal((0, _testHelpers.currentURL)(), '/admin');
      assert.equal(_admin.default.firstTitle, 'test1');
      assert.equal(_admin.default.firstPublished, 'false');
    });
  });
});
define('dummy/tests/acceptance/admin/new-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'dummy/tests/pages/admin', 'dummy/mirage/scenarios/single-post'], function (_qunit, _testHelpers, _emberQunit, _admin, _singlePost) {
  'use strict';

  (0, _qunit.module)('Acceptance | admin/new', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('visiting /admin/new', async function (assert) {
      (0, _singlePost.default)(this.server);
      await _admin.default.new().loginAlice();

      assert.equal((0, _testHelpers.currentURL)(), '/admin/posts/new');
    });
  });
});
define('dummy/tests/acceptance/blog-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'dummy/tests/pages/blog', 'dummy/mirage/scenarios/hundred-posts'], function (_qunit, _testHelpers, _emberQunit, _blog, _hundredPosts) {
  'use strict';

  (0, _qunit.module)('Acceptance | blog', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('visiting /blog', async function (assert) {
      (0, _hundredPosts.default)(this.server);
      await _blog.default.visit();

      assert.equal((0, _testHelpers.currentURL)(), '/blog');
      assert.ok(_blog.default.previous);
      assert.notOk(_blog.default.nextLink);
    });

    (0, _qunit.test)('visiting previous blog post', async function (assert) {
      (0, _hundredPosts.default)(this.server);
      await _blog.default.visit();
      await _blog.default.previousLink();

      assert.ok(/^\/blog\/posts\/(.*)$/.test((0, _testHelpers.currentURL)()));
      assert.ok(_blog.default.previous);
      assert.ok(_blog.default.nextLink);
    });
  });
});
define('dummy/tests/acceptance/blog/post/show-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'dummy/mirage/scenarios/single-post'], function (_qunit, _testHelpers, _emberQunit, _singlePost) {
  'use strict';

  (0, _qunit.module)('Acceptance | blog/posts/show', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('visiting /blog/posts/show', async function (assert) {
      (0, _singlePost.default)(this.server);
      await (0, _testHelpers.visit)('/blog/posts/-1');

      assert.equal((0, _testHelpers.currentURL)(), '/blog/posts/-1');
    });
  });
});
define('dummy/tests/acceptance/blog/posts-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'dummy/tests/pages/blog/posts', 'dummy/mirage/scenarios/hundred-posts'], function (_qunit, _testHelpers, _emberQunit, _posts, _hundredPosts) {
  'use strict';

  (0, _qunit.module)('Acceptance | blog/posts', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('visiting /blog/posts', async function (assert) {
      (0, _hundredPosts.default)(this.server);

      await _posts.default.visit();
      assert.equal((0, _testHelpers.currentURL)(), '/blog/posts');
      assert.ok(_posts.default.firstLinkIsActive);
      assert.ok(_posts.default.secondLinkIsVisible);
      assert.ok(_posts.default.lastLinkIsVisible);
      await _posts.default.secondLink();
      assert.equal((0, _testHelpers.currentURL)(), '/blog/posts?page=2');
      assert.ok(_posts.default.secondLinkIsActive);
    });
  });
});
define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('authorizers/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/authenticated.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/authenticated.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('services/session.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/session.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const { __container__: container } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('dummy/tests/helpers/ember-test-selectors', ['exports', 'ember-test-selectors'], function (exports, _emberTestSelectors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { deprecate } = Ember;

  let message = 'Importing testSelector() from "<appname>/tests/helpers/ember-test-selectors" is deprecated. ' + 'Please import testSelector() from "ember-test-selectors" instead.';

  deprecate(message, false, {
    id: 'ember-test-selectors.test-selector-import',
    until: '0.2.0',
    url: 'https://github.com/simplabs/ember-test-selectors#usage'
  });

  exports.default = _emberTestSelectors.default;
});
define('dummy/tests/page-object', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fullScope = exports.getContext = exports.findElement = exports.findElementWithAssert = exports.buildSelector = exports.visitable = exports.value = exports.triggerable = exports.text = exports.property = exports.notHasClass = exports.isVisible = exports.isPresent = exports.isHidden = exports.is = exports.hasClass = exports.focusable = exports.selectable = exports.fillable = exports.create = exports.count = exports.contains = exports.collection = exports.clickable = exports.clickOnText = exports.attribute = exports.alias = undefined;
  Object.defineProperty(exports, 'buildSelector', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(exports, 'findElementWithAssert', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(exports, 'findElement', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(exports, 'getContext', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(exports, 'fullScope', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fullScope;
    }
  });
  exports.alias = _emberCliPageObject.alias;
  exports.attribute = _emberCliPageObject.attribute;
  exports.clickOnText = _emberCliPageObject.clickOnText;
  exports.clickable = _emberCliPageObject.clickable;
  exports.collection = _emberCliPageObject.collection;
  exports.contains = _emberCliPageObject.contains;
  exports.count = _emberCliPageObject.count;
  exports.create = _emberCliPageObject.create;
  exports.fillable = _emberCliPageObject.fillable;
  exports.selectable = _emberCliPageObject.fillable;
  exports.focusable = _emberCliPageObject.focusable;
  exports.hasClass = _emberCliPageObject.hasClass;
  exports.is = _emberCliPageObject.is;
  exports.isHidden = _emberCliPageObject.isHidden;
  exports.isPresent = _emberCliPageObject.isPresent;
  exports.isVisible = _emberCliPageObject.isVisible;
  exports.notHasClass = _emberCliPageObject.notHasClass;
  exports.property = _emberCliPageObject.property;
  exports.text = _emberCliPageObject.text;
  exports.triggerable = _emberCliPageObject.triggerable;
  exports.value = _emberCliPageObject.value;
  exports.visitable = _emberCliPageObject.visitable;
  exports.default = {
    alias: _emberCliPageObject.alias,
    attribute: _emberCliPageObject.attribute,
    blurrable: _emberCliPageObject.blurrable,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    focusable: _emberCliPageObject.focusable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isPresent: _emberCliPageObject.isPresent,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };


  Ember.deprecate(`Importing from "test-support" is now deprecated. Please import directly from the "ember-cli-page-object" module instead.`, false, {
    id: 'ember-cli-page-object.import-from-test-support',
    until: "2.0.0",
    url: "https://gist.github.com/san650/17174e4b7b1fd80b049a47eb456a7cdc#file-import-from-test-support-js"
  });
});
define('dummy/tests/pages/admin', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/admin'),
    new: (0, _emberCliPageObject.visitable)('/admin/posts/new'),
    loginAlice: (0, _emberCliPageObject.clickable)('[data-test-login-alice]'),
    firstTitle: (0, _emberCliPageObject.text)('[data-test-post-id="1"] a'),
    firstPublished: (0, _emberCliPageObject.text)('[data-test-is-published]')
  });
});
define('dummy/tests/pages/admin/edit', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/admin/posts/1'),
    title: (0, _emberCliPageObject.fillable)('[data-test-title] input'),
    body: (0, _emberCliPageObject.fillable)('[data-test-body] textarea'),
    save: (0, _emberCliPageObject.clickable)('[data-test-save]'),
    cancel: (0, _emberCliPageObject.clickable)('[data-test-cancel]'),
    togglePublished: (0, _emberCliPageObject.clickable)('[data-test-is-published] input')
  });
});
define('dummy/tests/pages/blog', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/blog'),
    previous: (0, _emberCliPageObject.isVisible)('[data-test-previous] a'),
    previousLink: (0, _emberCliPageObject.clickable)('[data-test-previous] a'),
    nextLink: (0, _emberCliPageObject.isPresent)('[data-test-next] a')
  });
});
define('dummy/tests/pages/blog/posts', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/blog/posts'),
    firstLinkIsActive: (0, _emberCliPageObject.hasClass)('active', '[data-test-first] a'),
    lastLinkIsVisible: (0, _emberCliPageObject.isVisible)('[data-test-last] a'),
    secondLinkIsVisible: (0, _emberCliPageObject.isVisible)('[data-test-page="2"] a'),
    secondLink: (0, _emberCliPageObject.clickable)('[data-test-page="2"] a'),
    secondLinkIsActive: (0, _emberCliPageObject.hasClass)('active', '[data-test-page="2"] a')
  });
});
define('dummy/tests/test-helper', ['dummy/app', 'dummy/config/environment', '@ember/test-helpers', 'ember-qunit', 'ember-asset-loader/test-support/preload-assets', 'dummy/config/asset-manifest'], function (_app, _environment, _testHelpers, _emberQunit, _preloadAssets, _assetManifest) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _preloadAssets.default)(_assetManifest.default).then(_emberQunit.start);
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/admin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/admin-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/admin/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/admin/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/admin/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/admin/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/blog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/blog-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/blog/post/show-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/blog/post/show-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/blog/posts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/blog/posts-test.js should pass ESLint\n\n');
  });

  QUnit.test('pages/admin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/admin.js should pass ESLint\n\n');
  });

  QUnit.test('pages/admin/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/admin/edit.js should pass ESLint\n\n');
  });

  QUnit.test('pages/blog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/blog.js should pass ESLint\n\n');
  });

  QUnit.test('pages/blog/posts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/blog/posts.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
