import { GenreModel, Genre, BookModel } from 'nivclones-ilog-models';
import { Context } from 'koa';

export default {
  show: async function () {
    return await GenreModel.find();
  },

  showGenres: async function (ctx: Context) {
    const id: string = ctx.params.id;
    return await BookModel.findById(id, 'genres');
  },

  create: async function (ctx: Context) {
    const body: Genre = ctx.request.body;
    return await GenreModel.create(body);
  },

  update: async function (ctx: Context) {
    const body: Genre = ctx.request.body;
    const id: string = ctx.params.id;
    return await GenreModel.findByIdAndUpdate(id, body);
  },

  delete: async function (ctx: Context) {
    const id: string = ctx.params.id;
    return await GenreModel.findByIdAndDelete(id);
  },
};
