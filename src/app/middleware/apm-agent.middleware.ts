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
    captureBody: 'all',
    usePathAsTransactionName: true,
  });

  public init() {
    return this._init.middleware.connect();
  }

  public captureError(error) {
    return this._init.captureError(error);
  }
}

export default new APMAgent();
