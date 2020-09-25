import { Injectable, UseInterceptors } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ForbiddenException } from '@app/exceptions/httpException';

@Injectable()
export class CheckEmailService {
  constructor(private sequelize: Sequelize) {}
  getHello(): string {
    return 'hai'
    /* throw new ForbiddenException('INVALID_HEADERS', { msg: 'HELLO_WORLD', str: {
      name: 'MARCUS'
    } }) */
  }
}
