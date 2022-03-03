import Application from 'koa';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import kafka from './kafka';
import {
  configureError,
  configureHeader,
  configureLogger,
  configureFilter,
} from './utils/config';
import mongoose from 'mongoose';
import {
  AuthorController,
  BookController,
  GenreController,
  WordleController,
  JoiController,
} from './controllers';
import { registerController } from './utils/registerController';
import { koaSwagger } from 'koa2-swagger-ui';
import yamljs from 'yamljs';

const startServer = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');

  /* Setup app and router */
  const app: Application = new Koa();
  const router: Router = new Router();

  app.use(bodyParser());

  const spec = yamljs.load('./openapi.yaml');
  router.get(
    '/docs',
    koaSwagger({ routePrefix: false, swaggerOptions: { spec } })
  );

  /* Configure app */
  configureError(app);
  configureHeader(app);
  configureLogger(app);
  configureFilter(app);

  const producer = kafka.producer();
  await producer.connect();

  registerController(
    router,
    [
      BookController,
      GenreController,
      AuthorController,
      WordleController,
      JoiController,
    ],
    producer
  );

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(4000);

  console.log('🚀 App started listening on port 4000');
};

startServer();
