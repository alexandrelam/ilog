import mongoose from 'mongoose';
import kafka from './kafka';
import AuthorService from './services/AuthorService';
import { parseMessage } from './utils';
import { Operation } from './utils';

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
          AuthorService(operation, body);
      }
    },
  });

  console.log('Write service started');
};

startServer();
