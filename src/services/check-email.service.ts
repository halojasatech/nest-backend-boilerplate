import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { ForbiddenException } from '@app/exceptions/http-exception';

@Injectable({ scope: Scope.REQUEST })
export class CheckEmailService {
  constructor(@Inject(REQUEST) private request: Request) {}
  getHello(): any {
    /* throw new ForbiddenException('INVALID_BODY', {
      data: '1234',
    }); */
    return {
      password: '1234',
      asasasa: {
        asasa: 1,
        token: 'kadk',
      },
    };
  }
}
