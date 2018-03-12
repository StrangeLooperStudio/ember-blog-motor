export default [
  {
    id: 2,
    title: "Config",
    body: "Ember-blog-motor is fully configurable via your app's `config.environment.js`.\
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
    publishedAt: "2018-03-02T00:00:01",
    authorId: 1,
    nextPostId: 1,
    previousPostId: null
  },
  {
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
    publishedAt: "2018-03-02T00:00:00",
    authorId: 1,
    nextPostId: null,
    previousPostId: 2
  }
];
