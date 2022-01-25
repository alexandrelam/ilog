import { Context, Next } from 'koa';
import Router from 'koa-router';
import { Book, BookModel } from '../models/Book';

export const BookController = (router: Router) => {
  router.get('/book', async (ctx: Context) => {
    const payload = await BookModel.find();
    ctx.body = payload;
  });

  router.post('/book', async (ctx: Context) => {
    const body = ctx.request.body;
    ctx.body = await BookModel.create(body as Book);
  });
};
