import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";

import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async find(filterQuery: FilterQuery<User>): Promise<User[]> {
        return this.userModel.find(filterQuery);
    }

    async create(user: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async update(id: string, user: Partial<CreateUserDto>): Promise<User> {
        return this.userModel.findOneAndUpdate({ _id: id }, user, { new: true });
    }

    async delete(_id: string) {
        return this.userModel.deleteOne({ _id });
    }
}