import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import bookService from '../services/BookService';

export const BookController: Controller = (router: Router) => {
  router.get('/books', async (ctx: Context) => {
    ctx.body = bookService.show();
  });

  router.get('/authors/:authorID/books', async (ctx: Context) => {
    ctx.body = bookService.showBooks(ctx);
  });

  router.post('/books', async (ctx: Context) => {
    ctx.body = bookService.create(ctx);
  });

  router.put('/books/:id', async (ctx: Context) => {
    ctx.body = bookService.update(ctx);
  });

  router.delete('/books/:id', async (ctx: Context) => {
    ctx.body = bookService.delete(ctx);
  });
};
