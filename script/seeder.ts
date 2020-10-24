import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SeederModule } from '@database/seeder/seeder.module'
import Seeds  from '@database/seeder'

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
    .then(appContext => {
      const seeder = appContext.get(Seeds);
      seeder
        .seed()
        .then(() => {
          Logger.debug('Seeding Completed 🚀 ')
        })
        .finally(() => appContext.close());
    })
    .catch(error => {
      throw error;
    });
}

bootstrap();