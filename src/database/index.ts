import { SequelizeModule } from '@nestjs/sequelize';
import app from '@app/config/app';
import { UserAuthentication } from '@database/models/user-authentication.model';
import { UserData } from '@database/models/user-data.model';

const models = [UserAuthentication, UserData]

export default SequelizeModule.forRoot({
  dialect: 'postgres',
  host: app.database.host,
  port: app.database.port,
  username: app.database.username,
  password: app.database.password,
  database: app.database.database,
  autoLoadModels: app.database.autoLoadModels,
  synchronize: app.database.synchronize,
  models
});

