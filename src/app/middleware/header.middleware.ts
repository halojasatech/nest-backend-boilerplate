import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import i18n from 'i18n';
import Joi from 'joi';

import { ForbiddenException } from '@app/exceptions/httpException';

export class HeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    Joi.object({
      'accept-language': Joi.any()
        .valid('en-EN', 'id-ID')
        .required(),
    })
      .unknown()
      .validateAsync(req.headers)
      .then(() => {
        i18n.setLocale(req.header('accept-language'))
        next()
      })
      .catch(error =>
        next(
          new ForbiddenException('INVALID_HEADERS', { joiError: error  }),
        ),
      );
  }
}
