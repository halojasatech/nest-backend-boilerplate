/* eslint-disable @typescript-eslint/no-var-requires */
import { config } from 'dotenv';

const pjson = require('../../../package.json')
config();

/*
|--------------------------------------------------------------------------
| Base App Config
|--------------------------------------------------------------------------
|
| You can add new object for config variable. You can put value directly or
| take from .env file. If it's related with credentials, you should put
| the value from .env file.
|
*/

const appConfig = {

  /**
   * App Configuration
   *
  */
  app: {
    name: pjson.name,
    version: pjson.version
  },
  /**
   * Database Configuration
   * Please refer to https://docs.nestjs.com/techniques/database
   */
  database: {
    dialect: process.env.DATABASE_DIALECT as string,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) as number,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadModels: true,
    synchronize: true, // set true to sync based on models,
  },
  /**
   * ELK Stack Configuration
   * Please refer to https://www.elastic.co/guide/index.html
  */
 elk: {
   elasticsearch : {
    host: process.env.ELASTICSEARCH_HOST,
   },
   apm: {
     host: process.env.ELASTIC_APM_HOST,
   },
   logstash: {
     host: process.env.ELASTIC_LOGSTASH_HOST
   }
 }
};

export default appConfig;
