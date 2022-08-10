import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UserRepository } from "./user.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UserRepository) {}

    async getAll(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.usersRepository.create(createUserDto);
    }

    async updateUser(id: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.update( id, userUpdates);
    }
}