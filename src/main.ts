import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  setupSwagger(app)
  const port = 3000;
  await app.listen(port);
  console.log('start on ' + port);
}
bootstrap();
export function setupSwagger(app: INestApplication<any>):void {
  const options = new DocumentBuilder()
  .setTitle('NestJS API Docs')
  .setDescription('NestJS API description')
  .setVersion('1.0.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}

