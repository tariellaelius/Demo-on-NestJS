import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { User, UserSchema } from "./schemas/user.schema";
import { UsersController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UsersService } from "./user.service";
import { CountriesRepository } from "src/countries/countries.repository";
import { CountriesService } from "src/countries/countries.service";
import { Country, CountrySchema } from "src/countries/schemas/country.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    ],
    controllers: [UsersController,],
    providers: [UsersService, UserRepository, CountriesService, CountriesRepository]
})
export class UserModule { }