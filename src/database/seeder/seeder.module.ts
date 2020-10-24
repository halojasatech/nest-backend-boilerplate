import { Module } from '@nestjs/common';
import Database from '@database/index';
import Seeds from '@database/seeder/index';

@Module({
  imports: [Database],
  providers: [Seeds]
})
export class SeederModule {}
