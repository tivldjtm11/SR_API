import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeormConfig } from './config/getTypeOrmConfig';
import { GetPayInfoController } from './get-pay-info/get-pay-info.controller';
import { GetPayInfoService } from './get-pay-info/get-pay-info.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: getTypeormConfig,
    }),
  ],
  controllers: [AppController, TestController, GetPayInfoController],
  providers: [AppService, GetPayInfoService],
})
export class AppModule {}
