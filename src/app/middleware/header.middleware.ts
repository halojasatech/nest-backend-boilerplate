import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextFunction } from 'connect';
import * as Joi from 'joi';

import { ForbiddenException } from '@global/helpers/exception/httpException.helper';

@Injectable()
export class HeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    Joi.object({
      'accept-language': Joi.any()
        .valid('en-EN')
        .required(),
    })
      .unknown()
      .validateAsync(req.headers)
      .then(() => next())
      .catch(error =>
        next(new ForbiddenException('INVALID_HEADERS', 400)),
      );
  }
}
