import { HttpException, HttpStatus } from '@nestjs/common';
import locales from '@app/i18n/translation';

export class StatusException extends HttpException {
  constructor(status: HttpStatus, traceId: any, data: any ) {
    super({
      status: status,
      traceId: traceId,
      result: data
    },  HttpStatus.OK);
  }
}

export class ForbiddenException extends HttpException {
  constructor(flag: string, message?: any) {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        errors: {
          flag: flag,
          ...(message.joiError
            ? { errors: message.joiError.details }
            : { message: locales(message.msg, message.str) }),
        },
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
