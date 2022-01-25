import { prop, getModelForClass } from '@typegoose/typegoose';

export class Book {
  @prop()
  public name: string;

  @prop()
  public author: string;

  @prop()
  public numberOfPage: number;
}

export const BookModel = getModelForClass(Book);
