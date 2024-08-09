import { Injectable } from '@nestjs/common';
import { NewPost } from './posts.interface';

@Injectable()
export class PostsService {
  getlAllPosts() {
    return [
      { name: 'post 1', content: 'post 1 content text' },
      { name: 'post 2', content: 'post 2 content text' },
    ];
  }

  newPost(newPost: NewPost) {
    return { name: newPost.name, content: newPost.content };
  }
}
