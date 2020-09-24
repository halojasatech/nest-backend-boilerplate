import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  i18nInit from '@app/i18n/init'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(i18nInit)
  await app.listen(3000);
}
bootstrap();
