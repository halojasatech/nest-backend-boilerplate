import { config } from 'dotenv';
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
};

export default appConfig;
