import { CustomRepository } from '../database/typeorm-ex.decorator.js';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { Users } from '../entities/users.entity.js';

@CustomRepository(Users)
export class UsersRepository extends Repository<Users> {

    async signup(createUserDto:CreateUserDto): Promise<Users> {
        
        try {
            const result = this.create(createUserDto);
            await this.save(result);
            return result
        } catch (error) {
            throw new Error('이메일 혹은 닉네임 중복');
        }
        
    }
}
