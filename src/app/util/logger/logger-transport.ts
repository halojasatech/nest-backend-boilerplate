import winston from 'winston';
import config from '@app/config/app';

import { ElasticsearchTransport } from 'winston-elasticsearch';
import httpFormatLog from './formater/http-format';
import defaultFormatLog from './formater/default-format';
import apm from '@app/middleware/apm-agent.middleware';

class LoggerTransport {
  /**
   * Winston Logger Transport Configuration
   */
  private elasticTransport = new ElasticsearchTransport({
    level: 'info',
    clientOpts: { nodes: config.elk.elasticsearch.host },
    transformer: logData => this.formatMessage(logData),
  }).on('warning', error => {
    console.log('Failed save log to ES');
   throw new Error(error);
  });

  /**
   * Create Winston Logger
   */
  private logger = winston.createLogger({
    transports: [this.elasticTransport],
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

    // log with default format
    return defaultFormatLog(data);
  }
}

const transport = new LoggerTransport();

export default transport._init();
