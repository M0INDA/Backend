import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  constructor(
    private readonly configService : ConfigService,
  ){}
  
  getHello(): string {

    let result : string = this.configService.get<string>('CONFIG_TEST');
    return result;
  }
}
