import kafka, { send } from '../kafka';
import mongoose from 'mongoose';
import { createAuthor } from '../factory';

const seeder = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');

  const producer = kafka.producer();
  await producer.connect();

  for (let i = 0; i < 10; i++) {
    const author = createAuthor();
    send(producer, 'author.create', author);
  }
};

seeder();
