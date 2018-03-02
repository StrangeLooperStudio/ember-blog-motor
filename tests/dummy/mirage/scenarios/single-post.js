export default function(server) {

  let author = server.create('user', { isAdmin: true, email: 'alice@ebm.com', name: 'Admin Alice'});

  server.create('post', { author, isPublished: true });

}
