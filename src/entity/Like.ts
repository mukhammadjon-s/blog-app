import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {Blog} from "./Blog"; 
import {User} from "./User"; 

@Entity()
export class Like {
  
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @ManyToOne(() => Blog, (blog) => blog.likes)
  blog: Blog;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}