import { SequelizeModule } from '@nestjs/sequelize';
import app from '@app/config/app';

export default SequelizeModule.forRoot({
  dialect: 'postgres',
  host: app.database.host,
  port: app.database.port,
  username: app.database.username,
  password: app.database.password,
  database: app.database.database,
  autoLoadModels: app.database.autoLoadModels,
  synchronize: app.database.synchronize,
});
