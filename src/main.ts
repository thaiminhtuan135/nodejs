import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger(AppModule.name);
  const app = await NestFactory.create(AppModule);
  await app.listen(4242);
  logger.log(`server running on ${await app.getUrl()}`);
}
bootstrap();
