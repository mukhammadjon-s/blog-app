import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import {Blog} from "./Blog"; 

@Entity()
export class BlogImage {
  
  @Column({name: 'id', type:'int', nullable: false})
  @PrimaryGeneratedColumn('increment')
  public readonly id: number;

  @Column({name: 'image', type:'text', nullable: false})
  public readonly image: string;
  
  @ManyToOne(() => Blog, (blog) => blog.blogImage)
  @JoinColumn({name:'blog_id'})
  public readonly blog: Blog;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;
}