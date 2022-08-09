import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { User, UserSchema } from "./schemas/user.schema";
import { UsersController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UsersService } from "./user.service";

@Module({
    imports: [ MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [ UsersController, ],
    providers: [ UsersService, UserRepository, ]
})
export class UserModule {}