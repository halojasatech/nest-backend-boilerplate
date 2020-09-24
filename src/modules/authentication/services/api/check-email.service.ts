import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CheckEmailService {
  constructor(private sequelize: Sequelize) {}
  getHello(): string {
    return 'Welcome here.....';
  }
}
