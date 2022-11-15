import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 
import {User} from "./User"; 

@Entity()
export class Comment {
  
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @ManyToOne(() => Blog, (blog) => blog.likes)
  blog: Blog;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @ManyToOne(() => Comment, (comment) => comment.comment_id)
   @JoinColumn({
    name: "parent_id" })
  parent_id: Comment;

  @OneToMany(() => Comment, (comment) => comment.parent_id)
  comment_id: Comment[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}