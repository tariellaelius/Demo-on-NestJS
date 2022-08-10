import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { Country, CountrySchema } from './schemas/country.schema';
import { CountriesRepository } from './countries.repository';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]) ],
  controllers: [CountriesController],
  providers: [CountriesService, CountriesRepository]
})
export class CountriesModule {}
