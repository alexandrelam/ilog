import { Author, AuthorModel, BookModel } from 'nivclones-ilog-models';
import { Context } from 'koa';
import { Producer } from 'kafkajs';
import { send } from '../kafka';

export default {
  index: async function (ctx: Context) {
    return await AuthorModel.find()
      .limit(ctx.limit)
      .skip(ctx.limit * ctx.skip)
      .sort([[ctx.sortField, ctx.sortDirection]]);
  },

  indexBooks: async function (ctx: Context) {
    const authorID = ctx.params.authorID;
    return await BookModel.find({ 'author._id': authorID })
      .limit(ctx.limit)
      .skip(ctx.limit * ctx.skip);
  },

  show: async function (ctx: Context) {
    const authorID = ctx.params.authorID;
    return await AuthorModel.findById(authorID);
  },

  create: async function (ctx: Context, producer: Producer) {
    const body: Author = ctx.request.body;
    const author = new AuthorModel(body);
    await author.validate();
    send(producer, 'author.create', body);
    return author;
  },

  update: async function (ctx: Context, producer: Producer) {
    const body: Author = ctx.request.body;
    const id: string = ctx.params.id;
    send(producer, 'author.update', { id, ...body });
    const response = new AuthorModel(body);
    response._id = id;
    return response;
  },

  delete: async function (ctx: Context, producer: Producer) {
    const id: string = ctx.params.id;
    send(producer, 'author.delete', { id });
    return await AuthorModel.findById(id);
  },
};
