import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.lorem.sentence(); },
  body() { return faker.lorem.paragraph(); },
  isPublished() { return faker.random.boolean(); },
  publishedAt() { return faker.date.recent(); },
  createdAt() { return faker.date.recent(); },
  updatedAt() { return faker.date.recent(); }
});
