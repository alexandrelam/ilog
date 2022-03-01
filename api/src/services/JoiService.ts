import { JoiModel, Joi } from 'nivclones-ilog-models';
import { Context } from 'koa';

export default {
  index: async function (ctx: Context) {
    return await JoiModel.find()
      .limit(ctx.limit)
      .skip(ctx.limit * ctx.skip)
      .sort([[ctx.sortField, ctx.sortDirection]]);
  },

  create: async function (ctx: Context) {
    const body: Joi = ctx.request.body;
    return await JoiModel.create(body);
  },
};
