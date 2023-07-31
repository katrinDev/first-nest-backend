import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("posts")
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image")) //image - variable name with this file
  createPost(@Body() createPostDto: CreatePostDto, @UploadedFile() image) {
    return this.postService.createPost(createPostDto, image);
  }
}
