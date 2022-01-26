import { BookController } from './BookController';
import Router from 'koa-router';

export type Controller = (router: Router) => void;

export { BookController };
