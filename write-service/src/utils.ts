import { KafkaMessage } from 'kafkajs';

export function parseMessage(message: KafkaMessage) {
  return {
    subject: JSON.parse(message.value.toString()).subject,
    body: JSON.parse(message.value.toString()).body,
  };
}

export type Operation = 'create' | 'update' | 'delete';

export async function handleWrite(model, operation: Operation, body) {
  console.log(`Operation : ${operation}`);
  switch (operation) {
    case 'create':
      console.log('created');
      await model.create(body);
      break;
    case 'update':
      console.log('update');
      await model.findByIdAndUpdate(body.id, body);
      break;
    case 'delete':
      console.log('delete');
      await model.findByIdAndDelete(body.id);
      break;
  }
}
