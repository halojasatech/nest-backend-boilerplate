import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { Sequelize } from 'sequelize-typescript';
import { ForbiddenException } from '@app/exceptions/http-exception';
import logger from '@app/util/logger';

@Injectable({ scope: Scope.REQUEST })
export class CheckEmailService {
  constructor(@Inject(REQUEST) private request: Request) {}
  getHello(): any {
    return {
      password: '1234',
      asasasa: {
        asasa: 1,
        password: 'kadk',
      },
    };
  }
}
