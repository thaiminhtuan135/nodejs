import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './modules/posts/posts.controller';
import { PostsService } from './modules/posts/posts.service';
import { CmsModules } from './modules/cms.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

@Module({
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
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
    UserModule,
  ],
})
export class AppModule {}
