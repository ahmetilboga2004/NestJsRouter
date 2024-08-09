import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { AuthService } from './auth/auth.service';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [AuthModule, PostsModule],
  providers: [AuthService, PostsService],
})
export class V1Module {}
