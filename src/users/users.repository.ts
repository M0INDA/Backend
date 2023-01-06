import { CustomRepository } from '../database/typeorm-ex.decorator.js';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity.js';

@CustomRepository(Users)
export class UsersRepository extends Repository<Users> {

    async signup(user): Promise<any> {
        console.log(user)
        return 'test'
        // const { Id, password, name, gender, korIns, privIns, birthday } = user;
        // this.create({
        //   Id,
        //   password,
        //   name,
        //   gender,
        //   korIns,
        //   privIns,
        //   birthday,
        // });
    }
}
