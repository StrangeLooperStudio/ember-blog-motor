import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.name.title(); },
  isAdmin() { return faker.random.boolean(); },
  afterCreate(author, server) {
    server.createList('post', 100, { author });
  }
});
