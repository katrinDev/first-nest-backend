import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/user-role.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  //specify all models that we use inside the module
  imports: [SequelizeModule.forFeature([User, Role, UserRole])],
})
export class UsersModule {}
