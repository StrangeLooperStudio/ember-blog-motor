import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.lorem.sentence(); },
  body() { return faker.lorem.paragraph(); },
  isPublished() { return faker.random.boolean(); },
  createdAt() { return faker.date.past(); },
  updatedAt() { return faker.date.past(); },
  publishedAt() { return faker.date.between('2016-01-01', '2018-03-01'); },
});
