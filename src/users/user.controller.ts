import { Controller, Get } from "@nestjs/common";

import { User } from "./schemas/user.schema";
import { UsersService } from "./user.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }
}