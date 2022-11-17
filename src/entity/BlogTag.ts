import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 
import {Tag} from "./Tag"; 

@Entity()
export class BlogTag {

  @Column({name: 'id', type:'int', nullable: false})
  @PrimaryGeneratedColumn('increment')
  public readonly id: number;
  
  @ManyToOne(() => Blog, (blog) => blog.blogTag)
  @JoinColumn({name:'blog_id'})
  public readonly blog: Blog;

  @ManyToOne(() => Tag, (tag) => tag.blogTag)
  @JoinColumn({name:'tag_id'})
  public readonly tag: Tag;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;
}