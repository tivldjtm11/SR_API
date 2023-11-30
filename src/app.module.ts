import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeormConfig } from './config/getTypeOrmConfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: getTypeormConfig,
    }),
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
