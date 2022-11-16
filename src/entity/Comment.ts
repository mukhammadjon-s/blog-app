import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 
import {User} from "./User"; 

@Entity()
export class Comment {
  
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

  @ManyToOne(() => Comment, (comment) => comment.comment_id)
   @JoinColumn({
    name: "parent_id" })
  parent_id: Comment;

  @Column()
  content: string;

  @OneToMany(() => Comment, (comment) => comment.parent_id)
  comment_id: Comment[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}