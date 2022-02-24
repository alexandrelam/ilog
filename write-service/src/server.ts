import mongoose from 'mongoose';
import kafka from './kafka';
import { AuthorModel, BookModel, GenreModel } from 'nivclones-ilog-models';
import { handleWrite, parseMessage, Operation } from './utils';

const startServer = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');
  const consumer = kafka.consumer({ groupId: 'write-group' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'book', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`Message received: ${message.value.toString()}`);
      const { subject, body } = parseMessage(message);
      const modelName = subject.split('.')[0];
      const operation: Operation = subject.split('.')[1];
      switch (modelName) {
        case 'author':
          handleWrite(AuthorModel, operation, body);
          break;
        case 'book':
          handleWrite(BookModel, operation, body);
          break;
        case 'genre':
          handleWrite(GenreModel, operation, body);
          break;
      }
    },
  });

  console.log('Write service started');
};

startServer();
