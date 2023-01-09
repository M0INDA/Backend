import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { CreateUserDto } from './dto/createUserDto';
import { UsersRepository } from './users.repository.js';
import { LoginUserDto } from '../auth/dto/loginUserDto'
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor( 
        private readonly usersReopsitory:UsersRepository,
        // private readonly jwtService: JwtService
    ){}

    async findOne(email:string) : Promise<Users | undefined> {
        return await this.usersReopsitory.findOneBy({
            email:email
        })
    }

    async findId(userId:string | number) : Promise<Users | undefined> {

        if(typeof userId === 'string') throw new UnauthorizedException('test');

        return await this.usersReopsitory.findOneBy({
            userId:userId
        })
    }

    async signup(createUserDto:CreateUserDto) : Promise<Users>{
        const { email, password, nickname } = createUserDto;

        if( !email || !password || !nickname ) throw new Error('회원가입 데이터 오류')

        return await this.usersReopsitory.signup(createUserDto)
    }

}
