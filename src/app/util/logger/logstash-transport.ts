import log4js from 'log4js';
import config from '@app/config/app';

const transport = log4js.configure({
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
});

export default transport;
