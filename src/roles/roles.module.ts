import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./roles.model";
import { User } from "src/users/users.model";
import { UserRole } from "./user-role.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UserRole])],
})
export class RolesModule {}
