import { Context } from 'koa';
import Router from 'koa-router';
import { Book, BookModel } from '../models/Book';

export const BookController = (router: Router) => {
  router.get('/book', async (ctx: Context) => {
    const payload = await BookModel.find();
    ctx.body = payload;
  });

  router.post('/book', async (ctx: Context) => {
    const body: Book = ctx.request.body;
    ctx.body = await BookModel.create(body);
  });

  router.put('/book/:id', async (ctx: Context) => {
    const body: Book = ctx.request.body;
    const id: string = ctx.params.id;
    ctx.body = await BookModel.findByIdAndUpdate(id, body);
  });

  router.delete('/book/:id', async (ctx: Context) => {
    const id: string = ctx.params.id;
    ctx.body = await BookModel.findByIdAndDelete(id);
  });
};
