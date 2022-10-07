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

    return { message: '게시글 작성이 완료되었습니다.' };
  }

  async getAllPosts() {
    const allPost = await this.postRepository.find();
    return allPost;
  }

  async getPost(postId: number) {
    const post = await this.postRepository.findOne({ where: { id: postId } });
    return post;
  }
  async updatePost(postId: number, postInfo: PostInfoDto) {
    await this.postRepository
      .createQueryBuilder()
      .update(Post)
      .set({
        title: postInfo.title,
        content: postInfo.content,
        hashtags: postInfo.hashtags,
      })
      .where('id = :id', { id: 1 })
      .execute();

    return { message: '게시글 수정이 완료되었습니다.' };
  }

  async deletePost(postId: number) {
    await this.postRepository.softDelete({ id: postId });
    return { message: '게시글 삭제다 완료되었습니다.' };
  }
}
