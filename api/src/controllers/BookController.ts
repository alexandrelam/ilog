import { Producer } from 'kafkajs';
import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import bookService from '../services/BookService';

export const BookController: Controller = (
  router: Router,
  producer: Producer
) => {
  router.get('/books', async (ctx: Context) => {
    ctx.body = await bookService.show();
  });

  router.post('/books', async (ctx: Context) => {
    ctx.body = await bookService.create(ctx, producer);
  });

  router.put('/books/:id', async (ctx: Context) => {
    ctx.body = await bookService.update(ctx, producer);
  });

  router.delete('/books/:id', async (ctx: Context) => {
    ctx.body = await bookService.delete(ctx, producer);
  });
};
