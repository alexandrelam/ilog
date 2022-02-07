import { prop, getModelForClass } from '@typegoose/typegoose';

export class Wordle {
  @prop({ required: true })
  public word: string;
}

export const WordleModel = getModelForClass(Wordle);
