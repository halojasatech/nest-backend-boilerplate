import { Module } from '@nestjs/common';
import Database from './app/config/database';

@Module({
  imports: [Database],
})
export class AppModule {}
