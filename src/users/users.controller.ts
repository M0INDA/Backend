import { Controller, Get, Param, Query, Post, ValidationPipe, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/createUserDto'

@Controller('users')
export class UserController {

    constructor(
        private readonly userService:UserService
    ){}

    @Get()
    getEmail(
        @Query('email') email: string,
    ){
        console.log(email)
        return this.userService.getEmail(email);
    }

    @Post('signup')
    signup(
        @Body(ValidationPipe) createUserDto: CreateUserDto 
    ){
        console.log(createUserDto);
        return this.userService.signup(createUserDto);
    }
}
