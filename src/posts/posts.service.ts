import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostInfoDto } from './DTO/postInfoDto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async createPost(postInfo: PostInfoDto) {
    const post = new Post();

    post.title = postInfo.title;
    post.content = postInfo.content;
    post.hashtags = postInfo.hashtags;
    await this.postRepository.save(post);

    return { message: '회원가입이 완료되었습니다.' };
  }
  async getAllPosts() {
    return;
  }
  async getPost(postId: number) {
    return;
  }
  async updatePost(postId: number, postInfo: PostInfoDto) {
    return;
  }
  async deletePost(postId: number) {
    return;
  }
}
