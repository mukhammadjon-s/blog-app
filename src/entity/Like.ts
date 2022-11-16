import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 
import {User} from "./User"; 

@Entity()
export class Likes {
  
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @ManyToOne(() => Blog, (blog) => blog.likes)
  @JoinColumn({
    name: "blog_id" })
  blog: Blog;

  @ManyToOne(() => User, (user) => user.likes)
  @JoinColumn({
    name: "user_id" })
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}