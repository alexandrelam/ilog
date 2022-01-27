import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import { Author, AuthorModel } from '../models';

export const AuthorController: Controller = (router: Router) => {
  router.get('/author', async (ctx: Context) => {
    const payload = await AuthorModel.find();
    ctx.body = payload;
  });

  router.post('/author', async (ctx: Context) => {
    const body: Author = ctx.request.body;
    ctx.body = await AuthorModel.create(body);
  });

  router.put('/author/:id', async (ctx: Context) => {
    const body: Author = ctx.request.body;
    const id: string = ctx.params.id;
    ctx.body = await AuthorModel.findByIdAndUpdate(id, body);
  });

  router.delete('/author/:id', async (ctx: Context) => {
    const id: string = ctx.params.id;
    ctx.body = await AuthorModel.findByIdAndDelete(id);
  });
};
