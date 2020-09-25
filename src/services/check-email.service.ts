import { Injectable, UseInterceptors } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ForbiddenException } from '@app/exceptions/http-exception';

@Injectable()
export class CheckEmailService {
  constructor(private sequelize: Sequelize) {}
  getHello(): any {
    // return 'hi'
  throw new ForbiddenException('INVALID_HEADERS', { msg: 'HELLO_WORLD', str: {
      name: 'MARCUS'
    }})
  }
}
