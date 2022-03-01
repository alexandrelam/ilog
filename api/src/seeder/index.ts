import mongoose from 'mongoose';
import { createBook, createAuthor, createGenre } from '../factory';
import { BookModel, AuthorModel, GenreModel } from 'nivclones-ilog-models';

const seeder = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');

  await BookModel.deleteMany();
  await AuthorModel.deleteMany();
  await GenreModel.deleteMany();
  for (let i = 0; i < 5; i++) {
    const author = await AuthorModel.create(createAuthor());
    const genre = await GenreModel.create(createGenre());
    const book = await BookModel.create(createBook(author, genre));
    console.log(`created: ${book}`);
  }
};

seeder().then(() => console.log('Done!'));
