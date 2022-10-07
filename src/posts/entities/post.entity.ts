import { User } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  hashtags: string;

  @Column()
  likes: string;

  @Column()
  views: number;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
