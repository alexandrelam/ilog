import { Producer } from 'kafkajs';
import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import genreService from '../services/GenreService';

export const GenreController: Controller = (
  router: Router,
  producer: Producer
) => {
  router.get('/genres', async (ctx: Context) => {
    ctx.body = await genreService.show(ctx);
  });

  router.get('/genres/:genreID/books', async (ctx: Context) => {
    ctx.body = await genreService.showBooks(ctx);
  });

  router.post('/genres', async (ctx: Context) => {
    ctx.body = await genreService.create(ctx, producer);
  });

  router.put('/genres/:id', async (ctx: Context) => {
    ctx.body = await genreService.update(ctx, producer);
  });

  router.delete('/genres/:id', async (ctx: Context) => {
    ctx.body = await genreService.delete(ctx, producer);
  });
};
