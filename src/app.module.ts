import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import i18n from 'i18n';

import Database from '@app/config/database';

/**
 * Import Middleware
 */
import { HeaderMiddleware } from '@app/middleware/header.middleware';
import APMAgent from '@app/middleware/apm-agent.middleware';

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
    consumer.apply(APMAgent.init());
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
