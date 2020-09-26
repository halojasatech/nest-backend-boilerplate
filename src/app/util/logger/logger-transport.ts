import winston from 'winston';
import config from '@app/config/app';

import { ElasticsearchTransport } from 'winston-elasticsearch';
import { httpFormatLog } from './formater/http-format';

class LoggerTransport {
  /**
   * Winston Logger Transport Configuration
   */
  private logger = winston.createLogger({
    transports: [
      new ElasticsearchTransport({
        level: 'info',
        clientOpts: { nodes: config.elk.elasticsearch.host },
        transformer: logData => this.formatMessage(logData),
      }),
    ],
  });

  /**
   * Init winson logger
   */
  public _init() {
    return this.logger;
  }

  /**
   * Format proper message
   * @param data winston log data
   */
  private formatMessage(data): any {
    if (data.message == 'INCOMING_HTTP_REQUEST') {
      return httpFormatLog(data);
    }
  }
}

const transport = new LoggerTransport();

export default transport._init();
