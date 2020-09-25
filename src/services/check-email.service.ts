import { Injectable, UseInterceptors } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ForbiddenException } from '@app/exceptions/http-exception';
import log from '@app/util/logger/logger';

@Injectable()
export class CheckEmailService {
  constructor(private sequelize: Sequelize) {}
  getHello(): any {
    log.info('tes 123');
    throw new ForbiddenException('INVALID_HEADERS', {
      msg: 'HELLO_WORLD',
      str: {
        name: 'MARCUS',
      },
    });
  }
}
