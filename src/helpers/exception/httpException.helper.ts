import { HttpException, HttpStatus } from '@nestjs/common';
import locales from '@app/i18n/translation';

export class ForbiddenException extends HttpException {
  constructor(flag: string, message?: any) {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        errors: {
          flag: flag,
          ...(message.joiError
            ? { errors: message.joiError.details }
            : { message: locales(message.msg) }),
        },
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
