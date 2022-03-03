import { prop, getModelForClass } from '@typegoose/typegoose';

export class Joi {
  @prop({ required: true })
  public name: string;

  @prop({ required: true, min: 0 })
  public size: number;

  @prop({ required: true })
  public type: string;

  @prop({ required: true })
  public lastModified: number;

  @prop({ min: 0 })
  public duration?: string;

  @prop({ min: 0 })
  public videoWidth?: number;

  @prop({ min: 0 })
  public videoHeight?: number;
}

export const JoiModel = getModelForClass(Joi);
