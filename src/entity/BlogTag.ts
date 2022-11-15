import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {Blog} from "./Blog"; 
import {Tag} from "./Tag"; 

@Entity()
export class BlogTag {
  
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @ManyToOne(() => Blog, (blog) => blog.likes)
  blog: Blog;

  @ManyToOne(() => Tag, (tag) => tag.blogTag)
  tag: Tag;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}