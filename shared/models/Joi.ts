import { prop, getModelForClass } from '@typegoose/typegoose';

export class Joi {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public size: number;

  @prop({ required: true })
  public type: string;

  @prop({ required: true })
  public lastModified: number;
}

export const JoiModel = getModelForClass(Joi);
