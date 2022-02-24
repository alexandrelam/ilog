import { AuthorModel } from 'nivclones-ilog-models';
import { Operation } from '../utils';

export default async function (operation: Operation, body) {
  console.log(`Operation : ${operation}`);
  switch (operation) {
    case 'create':
      console.log('created author');
      await AuthorModel.create(body);
      break;
    case 'update':
      console.log('update author');
      await AuthorModel.findByIdAndUpdate(body.id, body);
      break;
    case 'delete':
      console.log('delete author');
      await AuthorModel.findByIdAndDelete(body.id);
      break;
  }
}
