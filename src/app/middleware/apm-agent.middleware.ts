/* eslint-disable @typescript-eslint/no-var-requires */
import { NestMiddleware } from '@nestjs/common';
import config from '@app/config/app';

export const APMAgent = require('elastic-apm-node').start({
  serviceName: config.app.name,
  serviceVersion: config.app.version,
  serverUrl: config.elk.apm.host,
});
