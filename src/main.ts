import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);

  //Bulder allows gradially add some properties to the object
  const config = new DocumentBuilder()
    .setTitle("Nest Backend try")
    .setDescription("REST API Documentation")
    .setVersion("1.0.0")
    .addTag("katrinDev")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () =>
    console.log(`Server was started on port ${PORT}`)
  );
}

start();
