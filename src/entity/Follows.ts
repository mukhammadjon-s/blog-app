import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import {User} from "./User"; 

@Entity()
export class Follow {
  
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @ManyToOne(() => User, (user) => user.following)
  @JoinColumn({
    name: "following_id" })
  following: User;
    
  @ManyToOne(() => User, (user) => user.follower)
  @JoinColumn({
    name: "follower_id" })
  follower: User;
      
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;
}