import { Controller, Get, Param, Query, Post, ValidationPipe, Body, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto'
import { LoginUserDto } from '../auth/dto/loginUserDto'
import { HttpExceptionFilter } from 'src/exception/exceptionfilter';


@UseFilters(HttpExceptionFilter)
@Controller('users')
export class UserController {

    constructor(
        private readonly usersService:UsersService
    ){}

    @Get() 
    getEmail(
        @Query('email') email: string,
    ){
        console.log(email)
        return this.usersService.findOne(email);
    }

    @Post('signup')
    signup(
        @Body(ValidationPipe) createUserDto: CreateUserDto 
    ){
        return this.usersService.signup(createUserDto);
    }

}
