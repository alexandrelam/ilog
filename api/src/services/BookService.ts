import {
  Book,
  BookModel,
  AuthorModel,
  GenreModel,
} from 'nivclones-ilog-models';
import { Context } from 'koa';

export default {
  show: async function () {
    return await BookModel.find();
  },

  showBooks: async function (ctx: Context) {
    const authorID = ctx.params.authorID;
    return await AuthorModel.findById(authorID, 'books');
  },

  create: async function (ctx: Context) {
    const body: Book = ctx.request.body;
    const authorId: string = ctx.request.body.author;
    const genresID: [string] = ctx.request.body.genres;
    const genres = await Promise.all(
      genresID.map(async (genreid) => await GenreModel.findById(genreid))
    );
    body.genres = genres;
    const author = await AuthorModel.findById(authorId);
    body.author = author;
    const createdBook = await BookModel.create(body);
    author.books = [...author.books, createdBook.id];
    await author.save();
    return createdBook;
  },

  update: async function (ctx: Context) {
    const body: Book = ctx.request.body;
    const id: string = ctx.params.id;
    const authorId: string = ctx.request.body.author;
    const genresID: [string] = ctx.request.body.genres;
    const genres = await Promise.all(
      genresID.map(async (genreid) => await GenreModel.findById(genreid))
    );
    body.genres = genres;
    body.author = await AuthorModel.findById(authorId);
    return await BookModel.findByIdAndUpdate(id, body);
  },

  delete: async function (ctx: Context) {
    const id: string = ctx.params.id;
    return await BookModel.findByIdAndDelete(id);
  },
};
