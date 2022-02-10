import mongoose from 'mongoose';
import kafka from './kafka';
import { AuthorModel } from 'nivclones-ilog-models';

const startServer = async () => {
  /* Connect to monbo database */
  await mongoose.connect('mongodb://mongo:27017/book');
  const consumer = kafka.consumer({ groupId: 'write-group' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'create', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Message received: ${message.value.toString()}`);
      const subject = JSON.parse(message.value.toString()).subject;
      const body = JSON.parse(message.value.toString()).body;
      if (subject === 'author') {
        console.log('create author');
        await AuthorModel.create(body);
      }
    },
  });

  console.log('Write service started');
};

startServer();
