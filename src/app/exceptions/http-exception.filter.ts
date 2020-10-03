import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import log from '@app/util/logger';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const traceId = request.header('X-Trace-ID');
    const result = exception.getResponse();
    const status = exception
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    // Log HTTP
    log.httpLog('INCOMING_HTTP_REQUEST', {
      data: {
        request,
        response: exception.getResponse(),
      },
    });

    // Return response
    if (status == 200) {
      response.status(status).json({
        status,
        traceId,
        result,
      });
    } else {
      response.status(status).json({
        status,
        traceId,
        errors:
          result['statusCode'] == 404
            ? { flag: 'INVALID_URL', message: result['message'] }
            : result,
      });
    }
  }
}
