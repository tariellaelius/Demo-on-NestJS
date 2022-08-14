import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [ MongooseModule.forRoot(process.env.DATABASE_HOST), UserModule, CountriesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
