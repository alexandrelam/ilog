import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Book } from './Book';

export class Author {
  @prop({ required: true })
  public name: string;

  @prop({ ref: () => Book })
  public books?: Ref<Book>[];
}

export const AuthorModel = getModelForClass(Author);
