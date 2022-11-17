import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import {Users} from "./User"; 

@Entity()
export class Follow {
  
  @Column({name: 'id', type:'int', nullable: false})
  @PrimaryGeneratedColumn('increment')
  public readonly id: number;
  
  @ManyToOne(() => Users, (user) => user.following)
  @JoinColumn({
    name: "following_id" })
  public readonly following: Users;
    
  @ManyToOne(() => Users, (user) => user.follower)
  @JoinColumn({
    name: "follower_id" })
  public readonly follower: Users;
      
  @Column({ name:'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public readonly createdAt: string;
}