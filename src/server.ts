import Application, { Context } from 'koa';
import Koa from 'koa';
import Router from 'koa-router';
import { configureLogger } from './utils/config';
import mongoose from 'mongoose';

const startServer = async () => {
  await mongoose.connect('mongodb://mongo:27017/book');

  const app: Application = new Koa();
  const router: Router = new Router();

  configureLogger(app);

  router.get('/hello', (ctx: Context) => {
    ctx.body = 'Hello World';
  });

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(3000);

  console.log('🚀 App started listening on port 3000');
};

startServer();
