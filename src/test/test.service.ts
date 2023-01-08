import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestRepository } from './test.repository.js';
import { Test } from '../entities/test.entity.js'

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(TestRepository)
        private testRepository: TestRepository,
    ) {}

    async getTest() : Promise<Test[]> {
        return this.testRepository.find({});
    }
}
