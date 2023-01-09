import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    CreateDateColumn
  } from 'typeorm';
  

  @Entity()
  @Unique(['userId','email'])
  export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    userId:number;

    @Column({nullable: false, length: 40, unique:true})
    email:string;

    @Column({nullable: false, length: 40, unique:true })
    nickname:string;

    @Column({nullable: false})
    password:string;

    @Column({nullable: true, default: null})
    profileImageUrl?:string;

    @Column({nullable: true})
    refreshtoken?:string;

    @Column({nullable: true, default: 0})
    score?:string;

    @CreateDateColumn()
    livingAt:Date;

}