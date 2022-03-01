import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import joiService from '../services/JoiService';

export const JoiController: Controller = (router: Router) => {
  router.get('/metadata', async (ctx: Context) => {
    ctx.body = await joiService.index(ctx);
  });
};
