import logger from './logger-transport';

class Logger {
  public httpLog(message: string, options?: any) {
    logger.info(message, {
      _index: options._index,
      data: options.data,
    });
  }

  public info(message: string, data: any) {
    logger.info(message, data);
  }
}

export default new Logger();
