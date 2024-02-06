import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CmsModules } from './modules/cms.modules';

@Module({
  imports: [
    CmsModules,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt('12345'),
      username: 'postgres',
      password: 'postgres',
      database: 'billiards',
      synchronize: true, // Đồng bộ hóa các entity với cơ sở dữ liệu
      entities: [`${__dirname}/../entities/*.{ts,js}`],
      migrations: [`${__dirname}/migrations/**/*.{ts,js}`],
    }),
  ],
})
export class AppModule {}
