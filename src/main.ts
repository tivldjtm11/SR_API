import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { version } from '@typescript-eslint/parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    // .addBearerAuth(
    //   {
    //     type: 'http',
    //     scheme: 'bearer',
    //     bearerFormat: 'Jwt',
    //     name: 'Jwt',
    //     in: 'header',
    //   },
    //   'Jwt',
    // )
    .setVersion(version)
    .build();

  const swaggerCustomOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true, //웹 페이지를 새로고침을 해도 Token 값 유지
    },
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, swaggerCustomOptions);

  const port = 3000;
  await app.listen(port);
  console.log('start on ' + port);
}
bootstrap();
