import { prop, getModelForClass } from '@typegoose/typegoose';
import { Author } from './Author';
import { Genre } from './Genre';

export class Book {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public author: Author;

  @prop({ required: true, min: 0, max: 16000 })
  public numberOfPage: number;

  @prop()
  public genres?: Genre[];
}

export const BookModel = getModelForClass(Book);
