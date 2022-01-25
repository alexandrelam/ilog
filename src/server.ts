import Application, { Context } from 'koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { configureLogger } from './utils/config';
import mongoose from 'mongoose';
import { BookController } from './controller/BookController';

const startServer = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');

  /* Setup app and router */
  const app: Application = new Koa();
  const router: Router = new Router();

  app.use(bodyParser());

  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    ctx.set('Content-Type', 'Application/json');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    await next();
  });

  /* Setup logger */
  configureLogger(app);

  router.get('/hello', (ctx: Context) => {
    ctx.body = 'Hello World';
  });

  BookController(router);

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(3000);

  console.log('🚀 App started listening on port 3000');
};

startServer();
