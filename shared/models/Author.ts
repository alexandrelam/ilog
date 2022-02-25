import { prop, getModelForClass } from '@typegoose/typegoose';

export class Author {
  @prop({ required: true })
  public name: string;
}

export const AuthorModel = getModelForClass(Author);
