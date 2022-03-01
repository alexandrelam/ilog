import { Book } from 'nivclones-ilog-models';
import { faker } from '@faker-js/faker';
import { Author, Genre } from 'nivclones-ilog-models';

export function createBook(author: Author, genre: Genre): Book {
  return {
    name: faker.name.findName(),
    author: author,
    numberOfPage: faker.datatype.number(1000),
    genres: [genre],
  };
}
