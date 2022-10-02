import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  hashtags: string;

  @Column()
  likes: string[];

  @Column()
  views: number;
}
