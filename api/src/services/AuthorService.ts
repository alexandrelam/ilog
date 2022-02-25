import { Author, AuthorModel, BookModel } from 'nivclones-ilog-models';
import { Context } from 'koa';
import { Producer } from 'kafkajs';
import { send } from '../kafka';

export default {
  show: async function () {
    return await AuthorModel.find();
  },

  showBooks: async function (ctx: Context) {
    const authorID = ctx.params.authorID;
    return await BookModel.find({ 'author._id': authorID });
  },

  create: async function (ctx: Context, producer: Producer) {
    const body: Author = ctx.request.body;
    const author = new AuthorModel(body);
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
