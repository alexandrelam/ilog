import { prop, getModelForClass } from '@typegoose/typegoose';
import { Book } from './Book';

export class Author {
  @prop({ required: true })
  public name: string;

  @prop()
  public books?: Book[];
}

export const AuthorModel = getModelForClass(Author);
