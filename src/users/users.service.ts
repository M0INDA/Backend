import { HttpStatus,Inject,forwardRef,Injectable, NotFoundException, UnauthorizedException, HttpException, HttpCode } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { CreateUserDto } from './dto/createUserDto';
import { UsersRepository } from './users.repository.js';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
// import { LoginUserDto } from '../auth/dto/loginUserDto'
// import { AuthService } from '../auth/auth.service';
// import { nanoid } from 'nanoid';


@Injectable()
export class UsersService {
    constructor( 
        private readonly usersReopsitory:UsersRepository,
        private configService: ConfigService
        // @Inject(forwardRef(() => AuthService))
        // private readonly authService:AuthService
    ){}

    // 이메일로 회원 찾기 : 권용교
    async findOne(email:string) : Promise<Users | undefined> {
        return await this.usersReopsitory.findOneBy({
            email:email
        })
    }

    // 회원 Id로 찾기 : 권용교
    async findId(userId:string | number) : Promise<Users | undefined> {

        if(typeof userId === 'string') throw new UnauthorizedException('test');

        return await this.usersReopsitory.findOneBy({
            userId:userId
        })
    }

    // 회원가입 : 권용교
    // 회원가입 초기 refresh token 값은 null
    // 회원 비밀번호 bcrypt 암호화를 사용하여 데이터베이스에 저장
    async signup(createUserDto:CreateUserDto) : Promise<Users | undefined>{
        
        // 회원 id 랜덤 값으로 넣어주는 로직 추가

        let { email, password, nickname } = createUserDto;
        let hash = parseInt(this.configService.get<string>('HASHCODE'))

        if( !email || !password || !nickname ) throw new HttpException('회원가입 데이터 오류',HttpStatus.BAD_REQUEST)
        try {
            
            createUserDto.password = await bcrypt.hash(password,hash);
        } catch (error) {
            throw new HttpException('비밀번호 암호화 오류',HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return await this.usersReopsitory.signup(createUserDto);
    
    }

    // 로그인 시 RefreshToken 업데이트 : 권용교
    async updateRefreshToken(userId:string|number,refreshToken:string){
        return await this.usersReopsitory.updateRefreshToken(userId,refreshToken);
    }

}
