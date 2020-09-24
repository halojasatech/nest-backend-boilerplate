import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import locales from '@app/i18n/translation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
