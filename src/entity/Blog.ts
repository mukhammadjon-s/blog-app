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
  
  @Column({name: 'id', type:'int', nullable: false})
  @PrimaryGeneratedColumn('increment')
  public readonly id: number;
  
  @Column({name: 'title', type:'varchar', nullable: false})
  public readonly title: string;
  
  @Column({name: 'content', type:'text', nullable: false})
  public readonly content: string;
  
  @Column({name: 'main_img', type:'varchar', nullable: true})
  public readonly mainImg!: string | null;
  
  @Column({name: 'status', type:'text', nullable: true})
  public readonly status!: BlogStatus | null;
  
  @Column({ name:'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;
  
  @ManyToOne(() => Category, (category) => category.blogs)
  @JoinColumn({name:'category_id'})
  public readonly category: Category

  @OneToMany(() => Likes, like => like.blog)
  public readonly likes: Likes[];

  @OneToMany(() => BlogTag, blogTag => blogTag.blog)
  public readonly blogTag: Likes[];

  @OneToMany(() => BlogImage, blogImage => blogImage.blog)
  public readonly blogImage: BlogImage[];
}