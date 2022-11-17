import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

import {BlogTag} from './BlogTag'

@Entity()
export class Tag {
  
  @Column({name: 'id', type:'int', nullable: false})
  @PrimaryGeneratedColumn('increment')
  public readonly id: number;

  @Column({name: 'content', type:'varchar', nullable: false})
  public readonly content: string;

  @Column({ name:'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;

  @OneToMany(() => BlogTag, blogTag => blogTag.tag)
  public readonly blogTag: BlogTag[];
}