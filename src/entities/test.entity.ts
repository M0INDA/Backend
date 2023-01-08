import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Unique,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
  

  @Entity()
  @Unique(['testId'])
  export class Test extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    testId: number;
  
    @Column({ length: 70 })
    testitle: string;
  
    @Column({ length: 500 })
    testContent: string;
  
    // @OneToMany(() => Keywords, (testKeyword) => testKeyword.test)
    // testKeywords: Keywords[];
  }
  
//   //게시물 키워드
//   @Entity()
//   @Unique(['postId'])
//   export class Keywords extends BaseEntity {
//     @PrimaryColumn()
//     testId: number;
  
//     @Column({ length: 15 })
//     testKeyword: string;
  
//     @ManyToOne(() => Test, (test) => test.testKeywords)
//     test: Test;
//   }
  