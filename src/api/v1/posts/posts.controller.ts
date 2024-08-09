import { Body, Controller, Get, Post, Version } from '@nestjs/common';
import { NewPost } from './posts.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Version('1')
  @Get()
  getAllPosts() {
    return this.postsService.getlAllPosts();
  }

  @Post()
  newPost(@Body() { name, content }: NewPost) {
    return this.postsService.newPost({ name, content });
  }
}
