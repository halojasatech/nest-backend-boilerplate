import { Injectable } from '@nestjs/common';
import config from '@app/config/app';
import apm from 'elastic-apm-node';

@Injectable()
class APMAgent {
  private readonly _init = apm.start({
    serviceName: config.app.name,
    serviceVersion: config.app.version,
    serverUrl: config.elk.apm.host,
    captureHeaders: true,
  });

  public init() {
    return this._init.middleware.connect();
  }
}

export default new APMAgent();
