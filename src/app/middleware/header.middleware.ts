import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

import { ForbiddenException } from '@app/exceptions/httpException';

@Injectable()
export class HeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    Joi.object({
      'accept-language': Joi.any()
        .valid('en-EN', 'id-ID')
        .required(),
    })
      .unknown()
      .validateAsync(req.headers)
      .then(() => next())
      .catch(error =>
        next(
          new ForbiddenException('INVALID_HEADERS', { joiError: error  }),
        ),
      );
  }
}
