import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Country, CountryDocument } from "./schemas/country.schema";

@Injectable()
export class CountriesRepository {
    constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>) {}

    async find(filterQuery: FilterQuery<Country>): Promise<Country[]> {
        return this.countryModel.find(filterQuery).select('name');
    }

    async findOne(filterQuery: FilterQuery<Country>): Promise<Country> {
        return this.countryModel.findOne(filterQuery);
    }
}