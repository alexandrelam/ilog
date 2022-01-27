import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import { Genre, GenreModel } from '../models';

export const GenreController: Controller = (router: Router) => {
  router.get('/genre', async (ctx: Context) => {
    const payload = await GenreModel.find();
    ctx.body = payload;
  });

  router.post('/genre', async (ctx: Context) => {
    const body: Genre = ctx.request.body;
    ctx.body = await GenreModel.create(body);
  });

  router.put('/genre/:id', async (ctx: Context) => {
    const body: Genre = ctx.request.body;
    const id: string = ctx.params.id;
    ctx.body = await GenreModel.findByIdAndUpdate(id, body);
  });

  router.delete('/genre/:id', async (ctx: Context) => {
    const id: string = ctx.params.id;
    ctx.body = await GenreModel.findByIdAndDelete(id);
  });
};
