import kafka, { send } from '../kafka';
import mongoose from 'mongoose';
import { createAuthor, createGenre } from '../factory';
import { AuthorModel, GenreModel } from 'nivclones-ilog-models';

const seeder = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');

  const producer = kafka.producer();
  await producer.connect();

  await AuthorModel.deleteMany();
  for (let i = 0; i < 5; i++) {
    const author = createAuthor();
    send(producer, 'author.create', author);
  }

  await GenreModel.deleteMany();
  for (let i = 0; i < 5; i++) {
    const genre = createGenre();
    console.log(genre);
    send(producer, 'genre.create', genre);
  }
};

seeder();
