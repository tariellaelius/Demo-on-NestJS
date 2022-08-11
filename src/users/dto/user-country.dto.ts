import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";


class UserCityDto {
    
    @IsNumber()
    readonly id: number;
}

export class UserStateDto {

    @IsNumber()
    readonly id: number;

    @IsObject()
    readonly city: UserCityDto;
}

export class UserCountryDto {

    @IsString()
    @IsNotEmpty()
    readonly _id: string;

    @IsObject()
    readonly state: UserStateDto;
}