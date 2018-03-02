import moment from 'moment';

// export default function(server) {
//
//   let author = server.create('user', { isAdmin: true, email: 'alice@ebm.com', name: 'Admin Alice'});
//
//   server.create('post', { author, isPublished: true });
//
//   window.server = server;
// }


export default function(server) {

  // let alice = server.create('user', { id: 1, isAdmin: true, email: 'mm@ebm.com', name: 'Matt Marcum' });
  // let bob = server.create('user', { id: 2, isAdmin: false, email: 'bob@ebm.com', name: 'Bob' });

  server.loadFixtures();

  // for(let i=0; i<99; i++) {
  //   let author = i%2 ? alice : bob;
  //   server.create('post', { author });
  // }
  //
  // let nextPost = null;
  //
  // server.schema.posts.all()
  // .sort((a, b) => moment(a.attrs.publishedAt).isBefore(moment(b.attrs.publishedAt)) ? 1 : -1)
  // .models.forEach(p=>{
  //   if(p.isPublished) {
  //     p.update('nextPost', nextPost || null);
  //     nextPost = p;
  //   }
  // });

  window.server = server;
}
