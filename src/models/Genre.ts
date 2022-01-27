import { prop, getModelForClass } from '@typegoose/typegoose';

export class Genre {
  @prop({ required: true })
  public name: string;
}

export const GenreModel = getModelForClass(Genre);
