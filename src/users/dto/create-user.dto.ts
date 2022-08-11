import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";

import { UserCountryDto } from "./user-country.dto";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    readonly dateOfBirth: Date;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly gender: string;

    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @IsObject()
    @ValidateNested()
    @Type(() => UserCountryDto)
    readonly country: UserCountryDto;

    @IsNumber()
    @IsNotEmpty()
    readonly pinCode: number;
}
