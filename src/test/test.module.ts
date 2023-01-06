import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmExModule } from '../database/typeorm-ex.module.js'
import { TestRepository } from './test.repository.js'

@Module({
  imports:[
    TypeOrmExModule.forCustomRepository([TestRepository]),
  ],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
