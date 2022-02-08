import Application from 'koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import {
  configureError,
  configureHeader,
  configureLogger,
} from './utils/config';
import mongoose from 'mongoose';
import {
  AuthorController,
  BookController,
  GenreController,
  WordleController,
} from './controllers';
import { registerController } from './utils/registerController';

const startServer = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');

  /* Setup app and router */
  const app: Application = new Koa();
  const router: Router = new Router();

  app.use(bodyParser());

  /* Configure app */
  configureError(app);
  configureHeader(app);
  configureLogger(app);

  registerController(router, [
    BookController,
    GenreController,
    AuthorController,
    WordleController,
  ]);

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(4000);

  console.log('🚀 App started listening on port 4000');
};

startServer();
