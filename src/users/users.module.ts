import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { UserController } from './users.controller';
import { UsersRepository } from './users.repository.js';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';


@Module({
  imports:[
    TypeOrmExModule.forCustomRepository([UsersRepository]),
    
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports : [UsersService]
})
export class UsersModule {}
