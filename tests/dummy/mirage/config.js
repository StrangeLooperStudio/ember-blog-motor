import moment from 'moment';

export default function() {

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
  this.post('/token', function(_, request) {
    const username = request.requestBody.split("&").find(s => s.startsWith('username')).split('=')[1]
    const isAlice = username === 'alice' ? true : false;
    return { access_token: 'test123', isAdmin: isAlice, user_id: isAlice ? 1 : 2 };
  });

  this.get('/users/:id');

  this.get('/posts', function({ posts }, request) {
    const page = parseInt(request.queryParams['page'], 10) || 1;
    const size = parseInt(request.queryParams['size'], 10) || 10;

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    const allPosts = posts.all();

    const filteredPosts =  request.queryParams['isPublished'] ?
      allPosts.filter(p => p.isPublished) :
      allPosts;

    const sortedPosts = filteredPosts.sort((a, b) =>
     moment(a.attrs.publishedAt).isBefore(moment(b.attrs.publishedAt)) ?
     1 : -1);

    let paginatedPosts = this.serialize(sortedPosts.slice(startIndex, endIndex));
    paginatedPosts.meta = {
      pagination: { page, size },
      count: filteredPosts.length
    };

    return paginatedPosts;
  });

  this.post('/posts', function({ posts }, request) {
    let id = request.params.id;
    let attrs = this.normalizedRequestAttrs();

    attrs.createdAt = new Date();
    attrs.updatedAt = new Date();

    if(attrs.isPublished) {
      attrs.publishedAt = new Date();
    }

    return posts.find(id).update(attrs);
  });

  this.get('/posts/:id');

  this.patch('/posts/:id', function({ posts }, request) {
    let id = request.params.id;
    let attrs = this.normalizedRequestAttrs();
    let post = posts.find(id);

    if(!post.isPublished && attrs.isPublished) {
      attrs.publishedAt = new Date();
    }

    attrs.updatedAt = new Date();

    return post.update(attrs);
  });
  this.del('/posts/:id')
}
