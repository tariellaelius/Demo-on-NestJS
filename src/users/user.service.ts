import { Injectable } from "@nestjs/common";

import { ValidationError } from "class-validator";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UserRepository } from "./user.repository";
import { CountriesRepository } from "src/countries/countries.repository";
import { UserState } from "./schemas/user-country.schema";
import { Location } from "src/countries/schemas/location.schema";
import { State } from "src/countries/schemas/state.schema";
import { UserStateDto } from "./dto/user-country.dto";

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UserRepository,
        private readonly countriesRepository: CountriesRepository,
    ) {}

    async getAll(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.fillLocationData(createUserDto);
        return this.usersRepository.create(<CreateUserDto>user);
    }

    async updateUser(id: string, submittedUpdates: UpdateUserDto): Promise<User> {
        let user = submittedUpdates;
        if(submittedUpdates.country) {
           user = await this.fillLocationData(submittedUpdates);
        }
        return this.usersRepository.update(id, user);
    }

    private async fillLocationData(submittedUser: UpdateUserDto) {
        const country = await this.getCountry(submittedUser.country._id);

        const mappedLocation = this.mapNames(submittedUser.country.state, country.states);
        
        return {
            ...submittedUser,
            country: {
                _id: String(country._id),
                name: country.name,
                state: mappedLocation,
            }
        };
    }

    private async getCountry(submittedCountryId: string) {
        const country = await this.countriesRepository.findOne({ _id: submittedCountryId });

        if(!country) throw new ValidationError();

        return country;
    }

    private mapNames(submittedState: UserStateDto, states: State[]): UserState {
        if(!submittedState.id) {
            return;
        }

        const state = <State>this.findLocation(submittedState.id, states);

        if(!state) throw new ValidationError();

        if(!submittedState.city?.id) {
            return {
                id: state.id,
                name: state.name,
                city: {
                    id: null,
                    name: null,
                }
            };
        }
        
        const city = this.findLocation(submittedState.city.id, state.cities);

        return {
            id: state.id,
            name: state.name,
            city
        };
    }

    private findLocation(id: number, collection: Location[]) {
        return collection.find(location => id === location.id);
    }

    deleteUser(_id: string) {
        return this.usersRepository.delete(_id);
    }
}