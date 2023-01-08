import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  

  @Entity()
  @Unique(['userId','email'])
  export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    userId:number;

    @Column({nullable: false, length: 40})
    email:string;

    @Column({nullable: false, length: 40})
    nickName:string;

    @Column({nullable: false})
    password:string;

    @Column({nullable: true})
    gender?:number;

    @Column({nullable: true, length: 40})
    name?:string;

    @Column({nullable: true, length: 40})
    phoneNumber?:string;

    @Column({nullable: true, length: 100})
    livingAt?:string;

    @Column({nullable: true, length: 40})
    birthday?:string;

}