import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Название роли" })
  @IsString({ message: "Должно быть строкой" })
  readonly value: string;

  @ApiProperty({ example: "1", description: "ID пользователя" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly userId: number;
}
