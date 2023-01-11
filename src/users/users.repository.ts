import { CustomRepository } from '../database/typeorm-ex.decorator.js';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { Users } from '../entities/users.entity.js';
import { HttpException, HttpStatus } from '@nestjs/common';

@CustomRepository(Users)
export class UsersRepository extends Repository<Users> {

    async signup(createUserDto:CreateUserDto): Promise<Users> {
        
        try {
            const result = this.create(createUserDto);
            await this.save(result);
            return result
        } catch (error) {
            throw new HttpException('이메일 혹은 닉네임 중복',HttpStatus.FORBIDDEN);
        }
        
    }
}
