import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import { Book, BookModel, AuthorModel, GenreModel } from '../models';

export const BookController: Controller = (router: Router) => {
  router.get('/book', async (ctx: Context) => {
    const payload = await BookModel.find();
    ctx.body = payload;
  });

  router.get('/book/:bookID/addgenre/:genreID', async (ctx: Context) => {
    const bookID = ctx.params.bookID;
    const genreID = ctx.params.genreID;
    const book = await BookModel.findById(bookID);
    const genre = await GenreModel.findById(genreID);
    await book.update({ genres: [...book.genres, genre] });
    ctx.body = book;
  });

  router.post('/book', async (ctx: Context) => {
    const body: Book = ctx.request.body;
    const authorId: string = ctx.request.body.author;
    body.author = await AuthorModel.findById(authorId);
    ctx.body = await BookModel.create(body);
  });

  router.put('/book/:id', async (ctx: Context) => {
    const body: Book = ctx.request.body;
    const id: string = ctx.params.id;
    ctx.body = await BookModel.findByIdAndUpdate(id, body);
  });

  router.delete('/book/:id', async (ctx: Context) => {
    const id: string = ctx.params.id;
    ctx.body = await BookModel.findByIdAndDelete(id);
  });
};