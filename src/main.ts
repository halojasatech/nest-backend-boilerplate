import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ResponseInterceptor from '@app/util/interceptors/response.interceptor';

import { redis } from '@app/library'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  redis.createClient()
  await app.listen(3000);
}
bootstrap();
