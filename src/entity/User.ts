import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

enum UserType {
  person = 'person',
  organization = 'org'
}

import {Like} from './Like'
import {Follow} from './Follows'
@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    pass: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    age: number;

    @Column()
    about: string;

    @Column()
    email: string;

    @Column()
    avatar: string;

    @Column('text')
    type: UserType;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: string;

    @OneToMany(() => Like, like => like.user)
    likes: Like[];

    @OneToMany(() => Follow, follow => follow.following)
    following: Follow[];

    @OneToMany(() => Follow, follow => follow.follower)
    follower: Follow[];
    
}
