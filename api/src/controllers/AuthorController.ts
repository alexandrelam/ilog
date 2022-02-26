import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import { Producer } from 'kafkajs';
import authorService from '../services/AuthorService';

export const AuthorController: Controller = (
  router: Router,
  producer: Producer
) => {
  router.get('/authors', async (ctx: Context) => {
    ctx.body = await authorService.show(ctx);
  });

  router.get('/authors/:authorID/books', async (ctx: Context) => {
    ctx.body = await authorService.showBooks(ctx);
  });

  router.post('/authors', async (ctx: Context) => {
    ctx.body = await authorService.create(ctx, producer);
  });

  router.put('/authors/:id', async (ctx: Context) => {
    ctx.body = await authorService.update(ctx, producer);
  });

  router.delete('/authors/:id', async (ctx: Context) => {
    ctx.body = await authorService.delete(ctx, producer);
  });
};
