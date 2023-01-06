import { Injectable } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { CreateUserDto } from './dto/createUserDto';
import { UsersRepository } from './users.repository.js';

@Injectable()
export class UserService {
    constructor(
        private readonly usersReopsitory:UsersRepository
    ){}

    async getEmail(email:string) : Promise<Users> {
        
        return await this.usersReopsitory.findOneBy({
            email:email
        })
        
    }

    async signup(userDto:CreateUserDto) : Promise<Users>{
        return await this.usersReopsitory.signup(userDto)
    }


}
