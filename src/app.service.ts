import { Injectable } from "@nestjs/common";

@Injectable() //cuz we need to inject this service into controller
export class AppService {
  getUsers() {
    return [{ id: 1, name: "Kate" }];
  }
}
