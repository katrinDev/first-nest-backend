import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/api")
export class AppController {
  //dependency injection
  constructor(private appService: AppService) {}

  @Get("/users")
  getUsers() {
    //by using DI we don't have to create an instance of our class service (NestJS does it instead), we just use it
    return this.appService.getUsers();
  }
}
