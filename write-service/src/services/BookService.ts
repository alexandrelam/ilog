import { Operation } from '../utils';

export default async function (model, operation: Operation, body) {
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
