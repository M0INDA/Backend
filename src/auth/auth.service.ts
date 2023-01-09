import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/loginUserDto';
import { Payload } from './security/interface';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService : UsersService,
        private readonly jwtService : JwtService
    ){}

    async validateUser(loginUserDto: LoginUserDto): Promise<{accessToken:string} | undefined> {
        
        const { email, password } = loginUserDto;

        let findUser: Users = await this.usersService.findOne(email);

        if(!findUser || password !== findUser.password) {
            throw new UnauthorizedException("비밀번호가 다릅니다");
        }

        // let payload : Payload = { nickname:findUser.nickname, userId:findUser.userId+'' }
        let payload : Payload = { email:findUser.email, userId:findUser.userId}

        return {
            accessToken: this.jwtService.sign(payload),
        }
    }

    async tokenValidateUser(payload:Payload) : Promise<LoginUserDto | undefined>{
        let { userId } = payload
        console.log(payload)

        return await this.usersService.findId(userId);
    }

}
