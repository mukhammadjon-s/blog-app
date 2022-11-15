import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import {Blog} from "./Blog"; 

@Entity()
export class Category {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: string;

    @OneToMany(() => Blog, blog => blog.category)
    blogs: Blog[];
  
}