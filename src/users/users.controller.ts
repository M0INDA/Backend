import { Controller, Get, Param, Query, Post, ValidationPipe, Body, UseFilters, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto'
import { LoginUserDto } from '../auth/dto/loginUserDto'


@Controller('users')
export class UserController {

    constructor(
        private readonly usersService:UsersService
    ){}

    @Post('checkEmail') 
    async getEmail(
        @Body('email') email: string,
    ):Promise<boolean>{
        let result = await this.usersService.findOne(email);
        if(result) throw new HttpException('존재하는 이메일입니다.',HttpStatus.FORBIDDEN)
        return true
    }

    @Post('checkNick')
    async getNick(
        @Body('nickname') nickName: string,
    ):Promise<boolean>{
        
        let result = await this.usersService.findNick(nickName);
        if(result) throw new HttpException('존재하는 닉네임입니다.',HttpStatus.FORBIDDEN)
        return true
    }

    @Post('signup')
    signup(
        @Body(ValidationPipe) createUserDto: CreateUserDto 
    ){
        return this.usersService.signup(createUserDto);
    }

    


    

}
