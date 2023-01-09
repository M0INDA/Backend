import { Body, Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common';
import { Response , Request} from 'express';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/loginUserDto';
import { AuthGuard } from './security/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService : AuthService
    ){}

    @Post('login')
    async login(@Body() loginUserDto : LoginUserDto, @Res() res:Response){
        const jwt = await this.authService.validateUser(loginUserDto);
        console.log(jwt)
        res.setHeader('Authorization','Bearer '+jwt.accessToken)
        return res.json(jwt)
    }

    @Get('/authenticate')
    @UseGuards(AuthGuard)
    isAuthenticated(@Req() req : Request):any{
        const user:any = req.user;
        return user;
    }

}
