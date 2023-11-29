import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as process from 'process';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      timezone: 'Asia/Seoul',
      namingStrategy: new SnakeNamingStrategy(),
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [path.resolve(__dirname, '../entities/*.entity{.ts,.js}')],
      migrations: ['src/database/migrations/*{.ts,.js}'],
      cli: { migrationsDir: 'src/database/migrations/migrations' },
    }),
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
