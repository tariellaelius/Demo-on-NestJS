import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { UserCountry } from './user-country.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ unique : true })
  email: string;

  @Prop({ enum: ['male', 'female'] })
  gender: string;

  @Prop()
  address: string;

  @Prop()
  country: UserCountry;

  @Prop()
  pinCode: number;
}

export const UserSchema = SchemaFactory.createForClass(User);