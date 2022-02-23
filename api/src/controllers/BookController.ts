import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import {
  Book,
  BookModel,
  AuthorModel,
  GenreModel,
} from 'nivclones-ilog-models';

export const BookController: Controller = (router: Router) => {
  router.get('/books', async (ctx: Context) => {
    const payload = await BookModel.find();
    ctx.body = payload;
  });

  router.get('/authors/:authorID/books', async (ctx: Context) => {
    const authorID = ctx.params.authorID;
    ctx.body = await AuthorModel.findById(authorID, 'books');
  });

  router.post('/books', async (ctx: Context) => {
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
    ctx.body = createdBook;
  });

  router.put('/books/:id', async (ctx: Context) => {
    const body: Book = ctx.request.body;
    const id: string = ctx.params.id;
    const authorId: string = ctx.request.body.author;
    const genresID: [string] = ctx.request.body.genres;
    const genres = await Promise.all(
      genresID.map(async (genreid) => await GenreModel.findById(genreid))
    );
    body.genres = genres;
    body.author = await AuthorModel.findById(authorId);
    ctx.body = await BookModel.findByIdAndUpdate(id, body);
  });

  router.delete('/books/:id', async (ctx: Context) => {
    const id: string = ctx.params.id;
    ctx.body = await BookModel.findByIdAndDelete(id);
  });
};
