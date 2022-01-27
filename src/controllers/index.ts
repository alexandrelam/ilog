export { AuthorController } from './AuthorController';
export { BookController } from './BookController';
export { GenreController } from './GenreController';
export { WordleController } from './WordleController';
import Router from 'koa-router';

export type Controller = (router: Router) => void;
