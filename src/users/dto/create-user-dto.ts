import { ApiProperty } from "@nestjs/swagger";

//it's better to declare dto as a class rather than interface.
//since TS interfaces are removed during the transpilation,
//Nest can't refer to interfaces in runtime
export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Почтовый адрес" })
  readonly email: string;

  @ApiProperty({ example: "12345678", description: "Пароль" })
  readonly password: string;
}
