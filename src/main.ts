import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@app/config/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
