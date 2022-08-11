import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';

import { State } from './state.schema';

export type CountryDocument = Country & Document;

@Schema()
export class Country {

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  readonly _id: ObjectId;

  @Prop()
  name: string;

  @Prop()
  states: [State]
}

export const CountrySchema = SchemaFactory.createForClass(Country);