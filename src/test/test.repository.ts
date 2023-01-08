import { CustomRepository } from '../database/typeorm-ex.decorator.js';
import { Repository } from 'typeorm';
import { Test } from '../entities/test.entity.js';

@CustomRepository(Test)
export class TestRepository extends Repository<Test> {}
