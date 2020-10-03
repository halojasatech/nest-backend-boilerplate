import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInteceptor } from '@app/util/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInteceptor());
  await app.listen(3000);
}
bootstrap();
