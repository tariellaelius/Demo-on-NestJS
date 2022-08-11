import { Prop, Schema } from '@nestjs/mongoose';


@Schema({ _id : false })
class UserLocation {
    @Prop()
    id: number;

    @Prop()
    name: string;
}

@Schema({ _id : false })
export class UserCity extends UserLocation {}

@Schema({ _id : false })
export class UserState extends UserLocation {

    @Prop()
    city: UserCity;
}

@Schema()
export class UserCountry {

    @Prop({ _id : false })
    _id: string;

    @Prop()
    name: string;

    @Prop()
    state: UserState;
}