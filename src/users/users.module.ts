import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { UserController } from './users.controller';
import { UsersRepository } from './users.repository.js';
import { UserService } from './users.service';

@Module({
  imports:[
    TypeOrmExModule.forCustomRepository([UsersRepository]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
