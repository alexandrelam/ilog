export { AuthorController } from './AuthorController';
export { BookController } from './BookController';
export { GenreController } from './GenreController';
export { WordleController } from './WordleController';
export { JoiController } from './JoiController';
import { Producer } from 'kafkajs';
import Router from 'koa-router';

export type Controller = (router: Router, producer?: Producer) => void;
