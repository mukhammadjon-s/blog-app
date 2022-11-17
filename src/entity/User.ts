import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

enum UserType {
  person = 'person',
  organization = 'org'
}

import {Likes} from './Like'
import {Follow} from './Follows'
@Entity()
export class Users {
  
  @Column({name: 'id', type:'int', nullable: false})
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column({name: 'pass', type:'varchar', nullable: false})
  pass: string;
  
  @Column({name: 'first_name', type:'varchar', nullable: false})
  public readonly firstName: string;
  
  @Column({name: 'last_name', type:'varchar', nullable: false})
  public readonly lastName: string;
  
  @Column({name: 'age', type:'int', nullable: true})
  public readonly age!: number | null;
  
  @Column({name: 'about', type:'varchar', nullable: true})
  public readonly about!: string | null;
  
  @Column({name: 'email', type:'varchar', nullable: false})
  public readonly email: string;
  
  @Column({name: 'avatar', type:'varchar', nullable: true})
  public readonly avatar!: string | null;
  
  @Column({name: 'type', type:'text', nullable: false})
  public readonly type: UserType;
  
  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;
  
  @OneToMany(() => Likes, like => like.user)
  public readonly likes: Likes[];
  
  @OneToMany(() => Follow, follow => follow.following)
  public readonly following: Follow[];
  
  @OneToMany(() => Follow, follow => follow.follower)
  public readonly follower: Follow[];
  
}
