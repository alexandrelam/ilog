import { Context, Next } from 'koa';
import Router from 'koa-router';
import { Book, BookModel } from '../models/Book';

export const BookController = (router: Router) => {
  router.get('/book', async (ctx: Context) => {
    const payload = await BookModel.find();
    ctx.body = JSON.stringify(payload);
  });

  router.post('/book', async (ctx: Context) => {
    console.log(ctx.request.body);
  });
};
