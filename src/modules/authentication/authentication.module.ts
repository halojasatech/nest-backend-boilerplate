import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { HeaderMiddleware } from '../../app/middleware/header.middleware';

import { AuthController } from './controllers/api/check-email.controller';

import { CheckEmailService } from './services/api/check-email.service';

@Module({
  controllers: [AuthController],
  providers: [CheckEmailService],
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HeaderMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
