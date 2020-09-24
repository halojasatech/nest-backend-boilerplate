import { Module } from '@nestjs/common';
import Database from '@app/config/database';

import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [Database, AuthenticationModule, UsersModule],
})
export class AppModule {}
