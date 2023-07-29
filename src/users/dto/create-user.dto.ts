import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

//it's better to declare dto as a class rather than interface.
//since TS interfaces are removed during the transpilation,
//Nest can't refer to interfaces in runtime
export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "Почтовый адрес" })
  @IsString({ message: "Должен быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;

  @ApiProperty({ example: "12345678", description: "Пароль" })
  @IsString({ message: "Должен быть строкой" })
  @Length(4, 10, { message: "Длина пароля - от 4 до 10 символов" })
  readonly password: string;
}
