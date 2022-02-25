import {
  Book,
  BookModel,
  AuthorModel,
  GenreModel,
} from 'nivclones-ilog-models';
import { Context } from 'koa';
import { send } from '../kafka';
import { Producer } from 'kafkajs';

export default {
  show: async function () {
    return await BookModel.find();
  },

  showGenres: async function (ctx: Context) {
    const id: string = ctx.params.id;
    return await BookModel.findById(id, 'genres');
  },

  create: async function (ctx: Context, producer: Producer) {
    const body: Book = ctx.request.body;
    const authorId: string = ctx.request.body.author;
    const genresID: [string] = ctx.request.body.genres;
    const genres = await Promise.all(
      genresID.map(async (genreid) => await GenreModel.findById(genreid))
    );
    body.genres = genres;
    const author = await AuthorModel.findById(authorId);
    body.author = author;
    send(producer, 'book.create', body);
    return new BookModel(body);
  },

  update: async function (ctx: Context, producer: Producer) {
    const body: Book = ctx.request.body;
    const id: string = ctx.params.id;
    const authorId: string = ctx.request.body.author;
    const genresID: [string] = ctx.request.body.genres;
    const genres = await Promise.all(
      genresID.map(async (genreid) => await GenreModel.findById(genreid))
    );
    body.genres = genres;
    body.author = await AuthorModel.findById(authorId);
    send(producer, 'book.update', { id, ...body });
    return new BookModel(body);
  },

  delete: async function (ctx: Context, producer: Producer) {
    const id: string = ctx.params.id;
    send(producer, 'book.delete', { id });
    return await BookModel.findById(id);
  },
};
