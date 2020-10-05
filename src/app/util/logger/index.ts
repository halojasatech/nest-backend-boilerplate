import logger from './logger-transport';

class Logger {
  public httpLog(message: string, options?: any) {
    logger.info(message, {
      _index: options._index,
      data: options.data,
    });
  }

  public info(message: string, data: object) {
    logger.info(message, data);
  }

  public warn(message: string, data: object) {
    logger.warn(message, data);
  }

  public error(message: string, data: object) {
    logger.error(message, data);
  }
}

export default new Logger();
