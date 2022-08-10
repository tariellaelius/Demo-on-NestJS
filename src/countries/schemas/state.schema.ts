import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { City } from './city.schema';
import { Location } from './location.schema';

export type StateDocument = State & Document;

@Schema()
export class State extends Location {

  @Prop()
  cities: [City]
}

export const StateSchema = SchemaFactory.createForClass(State);