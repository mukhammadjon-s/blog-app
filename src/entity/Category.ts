import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import {Blog} from "./Blog"; 

@Entity()
export class Category {

    @Column({name: 'id', type:'int', nullable: false})
    @PrimaryGeneratedColumn('increment')
    public readonly id: number;

    @Column({name: 'name', type:'varchar', nullable: false})
    public readonly name: string;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    public readonly createdAt: string;

    @OneToMany(() => Blog, blog => blog.category)
    public readonly blogs: Blog[];
  
}