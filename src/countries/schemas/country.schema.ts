import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { State } from './state.schema';

export type CountryDocument = Country & Document;

@Schema()
export class Country {

  @Prop()
  name: string;

  @Prop()
  states: [State]
}

export const CountrySchema = SchemaFactory.createForClass(Country);