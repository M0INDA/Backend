import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseConfig } from './database/DataBaseConfig';
import { ConfigModule } from '@nestjs/config'
import { TestModule } from './test/test.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: [`${__dirname}/.env`],
      envFilePath: [`.env`],
    }),
    TypeOrmModule.forRootAsync(DataBaseConfig),
    TestModule,
    // UserModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
