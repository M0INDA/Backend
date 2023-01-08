import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service.js';
import { Test } from '../entities/test.entity.js'


@Controller('test')
export class TestController {
    constructor(private readonly testService : TestService){}

    @Get()
    getTest(): Promise<Test[]>{
        return this.testService.getTest();
    }
}
