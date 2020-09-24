import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import i18n from '@app/i18n/handler'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
