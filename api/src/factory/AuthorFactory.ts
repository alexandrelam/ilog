import { Author } from 'nivclones-ilog-models';
import { faker } from '@faker-js/faker';

export function createAuthor(): Author {
  return {
    name: faker.name.findName(),
  };
}
