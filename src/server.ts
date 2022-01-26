import Application, { Context } from 'koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import {
  configureError,
  configureHeader,
  configureLogger,
} from './utils/config';
import mongoose from 'mongoose';
import { BookController } from './controllers';

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

  BookController(router);

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(3000);

  console.log('🚀 App started listening on port 3000');
};

startServer();
