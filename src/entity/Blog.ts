import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";

enum BlogStatus {
  private = 'private',
  public = 'public'
}

import {Category} from "./Category"; 
import {Likes} from "./Like"; 
import {BlogImage} from "./BlogImage"; 
import {BlogTag} from "./BlogTag"; 

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
  @JoinColumn({name:'category_id'})
  category: Category

  @OneToMany(() => Likes, like => like.blog)
  likes: Likes[];

  @OneToMany(() => BlogTag, blogTag => blogTag.blog)
  blogTag: Likes[];

  @OneToMany(() => BlogImage, blogImage => blogImage.blog)
  blogImage: BlogImage[];
}