import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import { WordleModel } from '../models';

export const WordleController: Controller = (router: Router) => {
  router.get('/wordle/exist/:word', async (ctx: Context) => {
    const word = ctx.params.word;
    console.log(await WordleModel.find({ word: word }));
    ctx.body = await WordleModel.find({ word: word });
  });

  router.get('/wordle/word/', async (ctx: Context) => {
    ctx.body = await WordleModel.aggregate().sample(1);
  });
};
