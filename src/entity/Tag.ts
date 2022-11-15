import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import {BlogTag} from './BlogTag'

@Entity()
export class Tag {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;

  @OneToMany(() => BlogTag, blogTag => blogTag.tag)
    blogTag: BlogTag[];
}