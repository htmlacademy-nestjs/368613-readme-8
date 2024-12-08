/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Конфигурация Swagger
  const config = new DocumentBuilder()
    .setTitle('Account Service API')
    .setDescription('Account service API documentation')
    .setVersion('1.0')
    .addTag('accounts')
    .build();

  // Создание документации
  const document = SwaggerModule.createDocument(app, config);
  // Подключение Swagger UI по пути /api/docs
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `📚 Swagger documentation is available at: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();
