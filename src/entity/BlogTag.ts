import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 
import {Tag} from "./Tag"; 

@Entity()
export class BlogTag {
  
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @ManyToOne(() => Blog, (blog) => blog.blogTag)
  @JoinColumn({name:'blog_id'})
  blog: Blog;

  @ManyToOne(() => Tag, (tag) => tag.blogTag)
  @JoinColumn({name:'tag_id'})
  tag: Tag;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}