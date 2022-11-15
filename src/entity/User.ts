import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pass: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    age: number;

}
