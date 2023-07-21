import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/user-role.model";

//fields that are needed for an object creation out of User model class
interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "user@gmail.com", description: "Почта" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "12345678", description: "Пароль" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: "true",
    description: "Заблокирован ли пользователь",
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: "Bad behavior", description: "Причина блокировки" })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
