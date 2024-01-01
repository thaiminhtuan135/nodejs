import { Controller, Get } from "@nestjs/common";
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  async getPost() {
    return await this.postService.getPosts();
  }
}
