import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Location } from './location.schema';

export type CityDocument = City & Document;

@Schema()
export class City extends Location {}

export const CitySchema = SchemaFactory.createForClass(City);