import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeormConfig } from './config/getTypeOrmConfig';
import { GetDonorInfoController } from './get-donor-info/get-donor-info.controller';
import { GetDonorInfoService } from './get-donor-info/get-donor-info.service';
import { Constituent } from './entities/Constituent.entity';
import { WebUser } from './entities/WebUser.entity';
import { Address } from './entities/Address.entity';
import { SelectionItem } from './entities/SelectionItem.entity'

@Module({
  imports: [TypeOrmModule.forRootAsync({useFactory: getTypeormConfig,}),
            TypeOrmModule.forFeature([Constituent, WebUser, Address, SelectionItem]),   
  ],
  controllers: [AppController, TestController, GetDonorInfoController],
  providers: [AppService, GetDonorInfoService],
})
export class AppModule {}
