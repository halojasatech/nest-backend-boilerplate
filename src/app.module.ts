import { Request, Response, NextFunction } from 'express';
import { Module, MiddlewareConsumer, RequestMethod, DynamicModule, ExecutionContext } from '@nestjs/common';
import Database from '@app/config/database';
import { HeaderMiddleware } from '@app/middleware/header.middleware';

/**
 * Import Controllers
 */
import { AuthController } from './controllers/check-email.controller';

/**
 * Import Services
 */
import { CheckEmailService } from './services/check-email.service';

@Module({
  imports: [Database],
  controllers: [AuthController],
  providers: [CheckEmailService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HeaderMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
