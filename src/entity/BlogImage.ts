import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {Blog} from "./Blog"; 

@Entity()
export class BlogImage {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  image: string;
  
  @ManyToOne(() => Blog, (blog) => blog.blogImage)
  blog: Blog;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}