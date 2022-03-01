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
  show: async function (ctx: Context) {
    return await BookModel.find()
      .limit(ctx.limit)
      .skip(ctx.limit * ctx.skip)
      .sort([[ctx.sortField, ctx.sortDirection]]);
  },

  showGenres: async function (ctx: Context) {
    const id: string = ctx.params.id;
    return await BookModel.findById(id, 'genres')
      .limit(ctx.limit)
      .skip(ctx.limit * ctx.skip);
  },

  create: async function (ctx: Context, producer: Producer) {
    const body: Book = ctx.request.body;
    const authorID: string = ctx.request.body.author;
    const genresID: [string] = ctx.request.body.genres;
    const genres = await Promise.all(
      genresID.map(async (genreid) => await GenreModel.findById(genreid))
    );
    body.genres = genres;
    const author = await AuthorModel.findById(authorID);
    body.author = author;
    const book = new BookModel(body);
    await book.validate();
    send(producer, 'book.create', body);
    return book;
  },

  update: async function (ctx: Context, producer: Producer) {
    const body: Book = ctx.request.body;
    const id: string = ctx.params.id;
    const authorID: string = ctx.request.body.author;
    const genresID: [string] = ctx.request.body.genres;
    const genres =
      genresID &&
      (await Promise.all(
        genresID.map(async (genreid) => await GenreModel.findById(genreid))
      ));
    body.genres = genres;
    body.author = authorID && (await AuthorModel.findById(authorID));
    send(producer, 'book.update', { id, ...body });
    return new BookModel(body);
  },

  delete: async function (ctx: Context, producer: Producer) {
    const id: string = ctx.params.id;
    send(producer, 'book.delete', { id });
    return await BookModel.findById(id);
  },
};
