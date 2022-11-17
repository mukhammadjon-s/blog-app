import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 
import {Users} from "./User"; 

@Entity()
export class Likes {
  
  @Column({name: 'id', type:'int', nullable: false})
  @PrimaryGeneratedColumn('increment')
  public readonly id: number;
  
  @ManyToOne(() => Blog, (blog) => blog.likes)
  @JoinColumn({
    name: "blog_id" })
  public readonly blog: Blog;

  @ManyToOne(() => Users, (user) => user.likes)
  @JoinColumn({
    name: "user_id" })
  public readonly user: Users;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;
}