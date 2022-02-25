import { GenreModel, Genre, BookModel } from 'nivclones-ilog-models';
import { Context } from 'koa';
import { Producer } from 'kafkajs';
import { send } from '../kafka';

export default {
  show: async function () {
    return await GenreModel.find();
  },

  create: async function (ctx: Context, producer: Producer) {
    const body: Genre = ctx.request.body;
    send(producer, 'genre.create', body);
    return new GenreModel(body);
  },

  update: async function (ctx: Context, producer: Producer) {
    const body: Genre = ctx.request.body;
    const id: string = ctx.params.id;
    send(producer, 'genre.update', { id, ...body });
    return await GenreModel.findById(id, body);
  },

  delete: async function (ctx: Context, producer: Producer) {
    const id: string = ctx.params.id;
    send(producer, 'genre.delete', { id });
    return await GenreModel.findById(id);
  },
};
