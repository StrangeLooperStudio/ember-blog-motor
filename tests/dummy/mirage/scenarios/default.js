import hundredPosts from './hundred-posts';

export default function(server) {

  server.loadFixtures();

  hundredPosts(server);

  window.server = server;
}
