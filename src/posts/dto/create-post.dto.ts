export class CreatePostDto {
  readonly title: string;
  readonly content: string;
  readonly userId: number; //it's better to get it from token
}
