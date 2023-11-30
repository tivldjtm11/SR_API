import { getConnectionOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

// eslint-disable-next-line
export const getTypeormConfig: () => Promise<TypeOrmModuleOptions> = async () => {

  const options: TypeOrmModuleOptions = {
    type: 'mssql',
    timezone: 'Asia/Seoul',
    namingStrategy: new SnakeNamingStrategy(),
    logging: false,
    debug: false,
    synchronize: false,
    entities: [__dirname, '../entities/*.entity{.ts,.js}'],
    host: 'firem6.iptime.org',
    username: 'srtest2',
    password: 'dpTmdkf_0120',
    port: 1433,
    database: 'Donas.srtest2.co.kr',
    schema: 'dbo',
    options: {
      encrypt: false,
    },
    // trustServerCertificate: false,
  };

  console.info('DB OPTIONS : ', options);

  return Object.assign(await getConnectionOptions(), {
    ...options,
    autoLoadEntities: true,
  });
};

// jdbc:sqlserver://;serverName=firem6.iptime.org;databaseName=donas.srtest2.co.kr
