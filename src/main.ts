import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInteceptor } from '@app/util/interceptors/response.interceptor';

import { redis } from '@app/library'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInteceptor());
  redis.createClient()
  await app.listen(3000);
}
bootstrap();
