import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

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

    @IsNumber()
    @IsNotEmpty()
    readonly pinCode: number;
}
