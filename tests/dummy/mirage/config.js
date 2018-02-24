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
  this.get('/users/:id');
  this.get('/posts', function({ posts }, request) {
    const defaultPage = { number: 1, size: 10 };

    const { number, size } = request.queryParams['page'] || defaultPage;
    const startIndex = (number - 1) * size;

    const allPosts = posts.all();

    const filteredPosts =  request.queryParams['isPublished'] ?
      allPosts.filter(p => p.isPublished) :
      allPosts;

    const sortedPosts = filteredPosts.sort((a, b) =>
     moment(a.attrs.publishedAt).isBefore(moment(b.attrs.publishedAt)) ?
     1 : -1);

    let paginatedPosts = this.serialize(sortedPosts.slice(startIndex, size));
    paginatedPosts.meta = {
      page: { number, size },
      count: allPosts.length
    };

    return paginatedPosts;
  });
  this.post('/posts')
  this.get('/posts/:id')
  this.put('/posts/:id')
  this.del('/posts/:id')
}
