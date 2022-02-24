import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import genreService from '../services/GenreService';

export const GenreController: Controller = (router: Router) => {
  router.get('/genres', async (ctx: Context) => {
    ctx.body = await genreService.show();
  });

  router.get('/books/:id/genres', async (ctx: Context) => {
    ctx.body = await genreService.showGenres(ctx);
  });

  router.post('/genres', async (ctx: Context) => {
    ctx.body = await genreService.create(ctx);
  });

  router.put('/genres/:id', async (ctx: Context) => {
    ctx.body = await genreService.update(ctx);
  });

  router.delete('/genres/:id', async (ctx: Context) => {
    ctx.body = await genreService.delete(ctx);
  });
};
