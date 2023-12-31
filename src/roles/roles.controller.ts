import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role-dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Role } from "./roles.model";

@ApiTags("Роли")
@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Создать роль" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: "Получить объект роли" })
  @ApiResponse({ status: 200, type: Role })
  @Get("/:value")
  get(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
