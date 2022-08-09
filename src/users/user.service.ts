import { Injectable } from "@nestjs/common";

import { User } from "./schemas/user.schema";
import { UserRepository } from "./user.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UserRepository) {}

    async getAll(): Promise<User[]> {
        return this.usersRepository.find({});
    }
}