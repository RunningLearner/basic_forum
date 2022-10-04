import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostInfoDto } from './DTO/postInfoDto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(@Body() postInfo: PostInfoDto) {
    return this.postsService.createPost(postInfo);
  }

  @Get()
  async getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(':postId')
  async getPost(@Param('postId') postId: number) {
    return this.postsService.getPost(postId);
  }

  @Put(':postId')
  async updatePost(
    @Param('postId') postId: number,
    @Body() postInfo: PostInfoDto,
  ) {
    return this.postsService.updatePost(postId, postInfo);
  }

  @Delete(':postId')
  async deletePost(@Param('postId') postId: number) {
    return this.postsService.deletePost(postId);
  }
}
