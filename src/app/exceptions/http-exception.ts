import { HttpException, HttpStatus } from '@nestjs/common';
import locales from '@app/i18n/translation';

export class CustomException extends HttpException {
  constructor(httpCode: number, flag: string, message: any) {
    super(
      {
        flag: flag,
        ...(message.joiError
          ? { details: message.joiError.details }
          : { message: locales(message.msg, message.str) }),
      },
      httpCode,
    );
  }
}

export class SuccessException extends HttpException {
  constructor(data: any) {
    super(!data.data ? data : data.data, HttpStatus.OK);
  }
}

export class BadRequestException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.BAD_REQUEST, data, traceId);
  }
}

export class UnauthorizedException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.UNAUTHORIZED, data, traceId);
  }
}

export class ForbiddenException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.FORBIDDEN, data, traceId);
  }
}

export class NotAcceptableException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.NOT_ACCEPTABLE, data, traceId);
  }
}

export class RequestTimeoutException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.REQUEST_TIMEOUT, data, traceId);
  }
}

export class ConflictException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.CONFLICT, data, traceId);
  }
}

export class HttpVersionNotSupportedException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.HTTP_VERSION_NOT_SUPPORTED, data, traceId);
  }
}

export class BadGatewayException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.BAD_GATEWAY, data, traceId);
  }
}

export class ServiceUnavailableException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.SERVICE_UNAVAILABLE, data, traceId);
  }
}

export class InternalServerErrorException extends CustomException {
  constructor(data: any, traceId?: any) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, data, traceId);
  }
}
