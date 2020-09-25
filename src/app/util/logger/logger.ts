import log4js from 'log4js';
import transport from './logstash-transport';

class Log {
  private logger: any;
  constructor() {
    this.logger = log4js
      .configure({
        appenders: {
          logstash: {
            type: '@log4js-node/logstash-http',
            url: 'http://elasticsearch:9200/_bulk',
            application: 'logstash-log4js',
            logType: 'application',
            logChannel: 'node',
          },
        },
        categories: {
          default: { appenders: ['logstash'], level: 'info' },
        },
      })
      .getLogger();
  }

  info(data: any) {
    this.logger.info(data);
  }
}

export default new Log();
