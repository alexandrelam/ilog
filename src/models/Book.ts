import { prop, getModelForClass } from '@typegoose/typegoose';

export class Book {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public author: string;

  @prop({ required: true, min: 0, max: 16000 })
  public numberOfPage: number;
}

export const BookModel = getModelForClass(Book);
