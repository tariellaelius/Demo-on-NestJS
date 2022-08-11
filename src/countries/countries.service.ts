import { Injectable } from '@nestjs/common';

import { CountriesRepository } from './countries.repository';
import { Country } from './schemas/country.schema';


@Injectable()
export class CountriesService {

  constructor(private readonly countriesRepository: CountriesRepository) {}

  findAll(): Promise<Partial<Country>[]> {
    return this.countriesRepository.find({});
}

  findOne(id: string) {
    return this.countriesRepository.findOne({ _id: id });
  }
}
