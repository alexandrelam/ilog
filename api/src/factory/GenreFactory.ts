import { Genre } from 'nivclones-ilog-models';
import { faker } from '@faker-js/faker';

export function createGenre(): Genre {
  return {
    name: faker.music.genre(),
  };
}
