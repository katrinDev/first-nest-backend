import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "Katrin_00",
      database: "nest-first",
      models: [],
      autoLoadModels: true, //ask to create tables out of our models
    }),
    UsersModule,
  ],
})
export class AppModule {}
