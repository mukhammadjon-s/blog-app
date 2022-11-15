import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

enum BlogStatus {
  private = 'private',
  public = 'public'
}

import {Category} from "./Category"; 
import {Like} from "./Like"; 
import {BlogImage} from "./BlogImage"; 

@Entity()
export class Blog {
  
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  title: string;
  
  @Column()
  content: string;
  
  @Column()
  main_img: string;
  
  @Column('text')
  status: BlogStatus;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
  
  @ManyToOne(() => Category, (category) => category.blogs)
  category: Category

  @OneToMany(() => Like, like => like.blog)
  likes: Like[];

  @OneToMany(() => BlogImage, blogImage => blogImage.blog)
  blogImage: BlogImage[];
}