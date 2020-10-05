import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import i18n from 'i18n';
import { APP_FILTER } from '@nestjs/core';

import { AllExceptionsFilter } from '@app/exceptions/http-exception.filter';

import Database from '@app/config/database';

/**
 * Import Middleware
 */
import { HeaderMiddleware } from '@app/middleware/header.middleware';
import apm from '@app/middleware/apm-agent.middleware';

/**
 * Import Controllers
 */
import { AuthController } from './controllers/sample';

/**
 * Import Services
 */
import { SampleService } from './services/sample.service';

@Module({
  imports: [Database],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    SampleService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(apm.init());
    consumer
      .apply((req, res, next) => {
        i18n.init(req, res, next);
        i18n.setLocale(req.language);
      })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    consumer
      .apply(HeaderMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
