import { Injectable } from "@nestjs/common";
import { Post } from "./posts.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  async createPost(dto: CreatePostDto, image: any) {
    const fileName = "askdj";
    const post = await this.postRepository.create({ ...dto, image: fileName });

    return post;
  }
}
