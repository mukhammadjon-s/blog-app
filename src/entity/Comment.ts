import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 
import {Users} from "./User"; 

@Entity()
export class Comment {
  
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

  @ManyToOne(() => Comment, (comment) => comment.comment_id)
   @JoinColumn({
    name: "parent_id"})
  public readonly parent_id!: Comment | null;

  @Column({name: 'content', type:'varchar', nullable: false})
  public readonly content: string;

  @OneToMany(() => Comment, (comment) => comment.parent_id)
  public readonly comment_id: Comment[];

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;
}