import { Injectable } from '@nestjs/common';
import config from '@app/config/app';
import apm from 'elastic-apm-node';

@Injectable()
class APMAgent {
  private _init: any;
  constructor() {
    this._init = apm.start({
      serviceName: config.app.name,
      serviceVersion: config.app.version,
      serverUrl: config.elk.apm.host,
    });
  }

  public init() {
    return this._init;
  }
}

export default new APMAgent();
