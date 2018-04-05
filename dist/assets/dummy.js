"use strict";

define('dummy/adapters/application', ['exports', 'ember-data', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _dataAdapterMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend(_dataAdapterMixin.default, {
    authorizer: 'authorizer:oauth2'
  });
});
define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default,
    //eslint-disable-next-line
    engines: {
      emberBlogMotor: {
        dependencies: {
          services: ['store']
        }
      },
      emberBlogMotorAdmin: {
        dependencies: {
          services: ['store', 'session']
        }
      }
    }
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant'], function (exports, _oauth2PasswordGrant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2PasswordGrant.default.extend({});
});
define('dummy/authorizers/oauth2', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _oauth2Bearer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2Bearer.default.extend({});
});
define('dummy/components/link-to-external', ['exports', 'ember-engines/components/link-to-external-component'], function (exports, _linkToExternalComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToExternalComponent.default;
    }
  });
});
define('dummy/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
define('dummy/config/asset-manifest', ['exports', 'require', 'dummy/config/environment'], function (exports, _require2, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const modulePrefix = _environment.default.modulePrefix;
  const metaName = `${modulePrefix}/config/asset-manifest`;
  const nodeName = `${modulePrefix}/config/node-asset-manifest`;

  let config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (_require2.default.has(nodeName)) {
      config = (0, _require2.default)(nodeName).default; // eslint-disable-line
    } else {
      const rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
      config = JSON.parse(unescape(rawConfig));
    }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  exports.default = config;
});
define('dummy/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
      invalidateSession() {
        this.get('session').invalidate();
      }
    }
  });
});
define('dummy/controllers/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
      login(user) {
        this.get('session').authenticate('authenticator:oauth2', user, null).catch(reason => {
          this.set('errorMessage', reason.error || reason);
        });
      }
    }
  });
});
define('dummy/ember-blog-motor-admin/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/pagination-links.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/pagination-links.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-editor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-editor.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-entry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-entry.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-list.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-summary.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-summary.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/posts/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/posts/new.js should pass ESLint\n\n');
  });

  QUnit.test('addon/engine.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/engine.js should pass ESLint\n\n');
  });

  QUnit.test('addon/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/posts/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/posts/edit.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/posts/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/posts/new.js should pass ESLint\n\n');
  });
});
define('dummy/ember-blog-motor-lib/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/pagination-links.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/pagination-links.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-entry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-entry.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-list.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-summary.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-summary.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/post-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/post-list.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/post-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/post-list.js should pass ESLint\n\n');
  });
});
define('dummy/ember-blog-motor/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/pagination-links.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/pagination-links.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-entry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-entry.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-list.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/post-summary.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/post-summary.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/posts/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/posts/index.js should pass ESLint\n\n');
  });

  QUnit.test('addon/engine.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/engine.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/posts/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/posts/index.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/posts/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/posts/show.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('dummy/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('dummy/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('dummy/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('dummy/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('dummy/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('dummy/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('dummy/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('dummy/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('dummy/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('dummy/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('dummy/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('dummy/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('dummy/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('dummy/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('dummy/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('dummy/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('dummy/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('dummy/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('dummy/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('dummy/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/ember-cli-mirage', ['exports', 'dummy/config/environment', 'dummy/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage-config',
    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, { env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('dummy/initializers/ember-simple-auth', ['exports', 'dummy/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('dummy/initializers/engines', ['exports', 'ember-engines/initializers/engines'], function (exports, _engines) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _engines.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _engines.initialize;
    }
  });
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('dummy/instance-initializers/load-asset-manifest', ['exports', 'dummy/config/asset-manifest'], function (exports, _assetManifest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */
  function initialize(instance) {
    const service = instance.lookup('service:asset-loader');
    service.pushManifest(_assetManifest.default);
  }

  exports.default = {
    name: 'load-asset-manifest',
    initialize
  };
});
define('dummy/mirage/config', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
    //this.namespace = 'api';
    this.post('/token', function (_, request) {
      const username = request.requestBody.split("&").find(s => s.startsWith('username')).split('=')[1];
      const isAdmin = username === 'admin' ? true : false;
      return { access_token: 'test123', isAdmin: isAdmin, user_id: isAdmin ? 1 : 2 };
    });

    this.get('/users/:id');

    this.get('/posts', function ({ posts }, request) {
      const page = parseInt(request.queryParams['page'], 10) || 1;
      const size = parseInt(request.queryParams['size'], 10) || 10;

      const startIndex = (page - 1) * size;
      const endIndex = startIndex + size;

      const allPosts = posts.all();

      const filteredPosts = request.queryParams['isPublished'] ? allPosts.filter(p => p.isPublished) : allPosts;

      const sortedPosts = filteredPosts.sort((a, b) => (0, _moment.default)(a.attrs.publishedAt).isBefore((0, _moment.default)(b.attrs.publishedAt)) ? 1 : -1);

      let paginatedPosts = this.serialize(sortedPosts.slice(startIndex, endIndex));
      paginatedPosts.meta = {
        pagination: { page, size },
        count: filteredPosts.length
      };

      return paginatedPosts;
    });

    this.post('/posts', function ({ posts }, request) {
      let id = request.params.id;
      let attrs = this.normalizedRequestAttrs();

      attrs.createdAt = new Date();
      attrs.updatedAt = new Date();

      if (attrs.isPublished) {
        attrs.publishedAt = new Date();
      }

      return posts.find(id).update(attrs);
    });

    this.get('/posts/:id');

    this.patch('/posts/:id', function ({ posts }, request) {
      let id = request.params.id;
      let attrs = this.normalizedRequestAttrs();
      let post = posts.find(id);

      if (!post.isPublished && attrs.isPublished) {
        attrs.publishedAt = new Date();
      }

      attrs.updatedAt = new Date();

      return post.update(attrs);
    });
    this.del('/posts/:id');
  };
});
define('dummy/mirage/factories/post', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    title() {
      return _emberCliMirage.faker.lorem.sentence();
    },
    body() {
      return _emberCliMirage.faker.lorem.paragraph();
    },
    isPublished() {
      return _emberCliMirage.faker.random.boolean();
    },
    createdAt() {
      return _emberCliMirage.faker.date.past();
    },
    updatedAt() {
      return _emberCliMirage.faker.date.past();
    },
    publishedAt() {
      return _emberCliMirage.faker.date.between('2016-01-01', '2018-03-01');
    }
  });
});
define('dummy/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({});
});
define("dummy/mirage/fixtures/post", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    id: 2,
    title: "Config",
    body: "Ember-blog-motor is fully configurable via your app's `config/environment.js`.\
    All of our configs are stored under the `EmberBlogMotor` key.  If you want to\
    see the defaults you can always look at this addon's index.js#config hook.\n\n\n\
```\n\
EmberBlogMotor: {\n\
    sessionService: 'session',\n\
    authorModel: 'user',\n\
    authorNameField: 'name',\n\
    showTitle: true,\n\
    title: 'Ember-Blog-Motor (An Engine Addon)',\n\
    showNav: true,\n\
    showAdminTitle: true,\n\
    adminTitle: 'Ember-Blog-Motor-Admin (An Engine In-Repo-Addon)',\n\
    showAdminNav: true,\n\
    dateFormat: 'L',\n\
    links: {\n\
      blogHome: 'Blog Home',\n\
      allBlogPosts: 'Blog Posts',\n\
      admin: 'Admin',\n\
      adminAllPosts: 'Blog Posts',\n\
      adminNew: 'Create New Post',\n\
      previous: 'Previous',\n\
      next: 'Next'\n\
    }\n\
  }\n\
}\n\
```",
    isPublished: true,
    createdAt: "2018-03-02T00:00:00",
    updatedAt: "2018-03-02T00:00:00",
    publishedAt: "2018-03-02T00:00:00",
    authorId: 1,
    nextPostId: 1,
    previousPostId: null
  }, {
    id: 1,
    title: "Intro",
    body: "Hi Everyone, This was a fun little project that allowed me explore the\
    current state (03/2018) of [ember-engines](http://ember-engines.com).\n\nIf you're\
    looking for a demo of how to create an ember-cli-addon engine then you've come to\
    the right place.  This addon contains two types of engines - a normal addon engine\
    (the blog) and an in-repo-engine (the admin interface).\n\nIn addition it makes use\
    of [Showdown](https://github.com/showdownjs/showdown) via\
    [Ember-cli-showdown](https://github.com/gcollazo/ember-cli-showdown) for its markdown rendering.\
    [Ember-moment](https://github.com/stefanpenner/ember-moment) for date-handling.\
    And [Ember-get-config](https://github.com/patience-tema-baron/ember-get-config)\
    to access the parent app's configuration.\
    All these packages will be added to the consuming app automatically during installation.",
    isPublished: true,
    createdAt: "2018-03-02T00:00:00",
    updatedAt: "2018-03-02T00:00:00",
    publishedAt: "2018-03-02T00:00:01",
    authorId: 1,
    nextPostId: null,
    previousPostId: 2
  }];
});
define('dummy/mirage/fixtures/user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ id: 1, isAdmin: true, email: 'mm@ebm.com', name: 'Matt Marcum', postIds: [1, 2] }, { id: 2, isAdmin: false, email: 'bob@ebm.com', name: 'Bob' }];
});
define('dummy/mirage/models/post', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({
    author: (0, _emberCliMirage.belongsTo)('user'),
    nextPost: (0, _emberCliMirage.belongsTo)('post', { inverse: 'previousPost' }),
    previousPost: (0, _emberCliMirage.belongsTo)('post', { inverse: 'nextPost' })
  });
});
define('dummy/mirage/scenarios/default', ['exports', 'dummy/mirage/scenarios/hundred-posts'], function (exports, _hundredPosts) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    server.loadFixtures();

    (0, _hundredPosts.default)(server);

    window.server = server;
  };
});
define('dummy/mirage/scenarios/hundred-posts', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    let alice = server.create('user', { id: 1, isAdmin: true, email: 'mm@ebm.com', name: 'Matt Marcum' });
    let bob = server.create('user', { id: 2, isAdmin: false, email: 'bob@ebm.com', name: 'Bob' });

    for (let i = 0; i < 99; i++) {
      let author = i % 2 ? alice : bob;
      server.create('post', { author });
    }

    let nextPost = null;

    server.schema.posts.all().sort((a, b) => (0, _moment.default)(a.attrs.publishedAt).isBefore((0, _moment.default)(b.attrs.publishedAt)) ? 1 : -1).models.forEach(p => {
      if (p.isPublished) {
        p.update('nextPost', nextPost || null);
        nextPost = p;
      }
    });

    window.server = server;
  };
});
define('dummy/mirage/scenarios/single-post', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    let author = server.create('user', { isAdmin: true, email: 'alice@ebm.com', name: 'Admin Alice' });

    server.create('post', { author, isPublished: true });
  };
});
define('dummy/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({
    alwaysIncludeLinkageData: true
  });
});
define('dummy/models/post', ['exports', 'ember-data', 'ember-get-config'], function (exports, _emberData, _emberGetConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    body: _emberData.default.attr('string'),
    isPublished: _emberData.default.attr('boolean'),
    publishedAt: _emberData.default.attr('date'),
    createdAt: _emberData.default.attr('date'),
    updatedAt: _emberData.default.attr('date'),

    author: _emberData.default.belongsTo(_emberGetConfig.default.EmberBlogMotor.authorModel),
    nextPost: _emberData.default.belongsTo('post', { inverse: 'previousPost' }),
    previousPost: _emberData.default.belongsTo('post', { inverse: 'nextPost' }),

    post_slug: Ember.computed('title', 'id', function () {
      return `${Ember.String.dasherize(this.title || '')}-${this.id}`;
    })
  });
});
define('dummy/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    posts: _emberData.default.hasMany('post')
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.mount('ember-blog-motor', { path: '/blog' });
    this.route('authenticated', { path: '' }, function () {
      this.mount('ember-blog-motor-admin', { path: '/admin' });
    });

    this.route('index', { path: '/' });
    this.route('login');
  });

  exports.default = Router;
});
define('dummy/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default);
});
define('dummy/routes/authenticated', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_authenticatedRouteMixin.default);
});
define('dummy/routes/login', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default);
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('dummy/services/asset-loader', ['exports', 'ember-asset-loader/services/asset-loader'], function (exports, _assetLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _assetLoader.default;
    }
  });
});
define('dummy/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('dummy/services/moment', ['exports', 'ember-moment/services/moment', 'dummy/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { get } = Ember;

  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('dummy/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _session.default.extend({
        emberData: Ember.inject.service('store'),
        isAdmin: Ember.computed.alias('data.authenticated.isAdmin'),
        userId: Ember.computed.alias('data.authenticated.user_id')
    });
});
define('dummy/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "303Csvq0", "block": "{\"symbols\":[],\"statements\":[[6,\"header\"],[8],[0,\"\\n  \"],[6,\"h1\"],[10,\"id\",\"title\"],[8],[0,\"Ember-Blog-Motor - Dummy App\"],[9],[0,\"\\n  \"],[6,\"nav\"],[8],[0,\"\\n    \"],[6,\"ul\"],[8],[0,\"\\n      \"],[6,\"li\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Dummy Index\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"ember-blog-motor.index\"],null,{\"statements\":[[0,\"Blog\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAdmin\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"authenticated.ember-blog-motor-admin.index\"],null,{\"statements\":[[0,\"Admin\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"li\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[3,\"action\",[[21,0,[]],\"invalidateSession\"]],[8],[0,\"Logout\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[4,\"link-to\",[\"login\"],null,{\"statements\":[[0,\"Login\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"section\"],[8],[0,\"\\n  \"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/authenticated", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XynraWC3", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/authenticated.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7gClmufy", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[8],[0,\"Welcome to Ember-Blog-Motor's github page\"],[9],[0,\"\\n\\n\"],[6,\"p\"],[8],[0,\"This is the dummy app, click the \"],[4,\"link-to\",[\"ember-blog-motor.index\"],null,{\"statements\":[[0,\"blog\"]],\"parameters\":[]},null],[0,\"\\n  link above to navigate to the public engine.\"],[9],[0,\"\\n\"],[6,\"p\"],[8],[0,\"Click the \"],[4,\"link-to\",[\"login\"],null,{\"statements\":[[0,\"login\"]],\"parameters\":[]},null],[0,\" or \"],[4,\"link-to\",[\"authenticated.ember-blog-motor-admin.index\"],null,{\"statements\":[[0,\"admin\"]],\"parameters\":[]},null],[0,\"\\n  link to get access to the admin engine.\"],[9],[0,\"\\n\\n\"],[6,\"p\"],[8],[0,\"Want to know more about the Ember-BlogMotor addon?  Checkout the following blog posts:\\n  \"],[6,\"ul\"],[8],[0,\"\\n    \"],[6,\"li\"],[8],[4,\"link-to\",[\"ember-blog-motor.posts.show\",\"Intro-1\"],null,{\"statements\":[[0,\"Intro\"]],\"parameters\":[]},null],[9],[0,\"\\n    \"],[6,\"li\"],[8],[4,\"link-to\",[\"ember-blog-motor.posts.show\",\"Configuration-2\"],null,{\"statements\":[[0,\"Configuration\"]],\"parameters\":[]},null],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});
define("dummy/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AvrIjZI9", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"errorMessage\"]]],null,{\"statements\":[[6,\"h1\"],[8],[1,[20,\"errorMessage\"],false],[9]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"p\"],[8],[6,\"a\"],[10,\"data-test-login-alice\",\"\"],[10,\"href\",\"#\"],[3,\"action\",[[21,0,[]],\"login\",\"admin\"]],[8],[0,\"Log in as Admin\"],[9],[9],[0,\"\\n\"],[6,\"p\"],[8],[6,\"a\"],[10,\"data-test-login-bob\",\"\"],[10,\"href\",\"#\"],[3,\"action\",[[21,0,[]],\"login\",\"bob\"]],[8],[0,\"Log in as bob\"],[9],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/login.hbs" } });
});
define('dummy/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/post.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/user.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/fixtures/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/post.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/fixtures/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/user.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/post.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/hundred-posts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/hundred-posts.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/single-post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/single-post.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
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

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
