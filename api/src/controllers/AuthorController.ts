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
    ctx.body = authorService.show();
  });

  router.post('/authors', async (ctx: Context) => {
    ctx.body = authorService.create(ctx, producer);
  });

  router.put('/authors/:id', async (ctx: Context) => {
    ctx.body = authorService.update(ctx);
  });

  router.delete('/authors/:id', async (ctx: Context) => {
    ctx.body = authorService.delete(ctx);
  });
};
