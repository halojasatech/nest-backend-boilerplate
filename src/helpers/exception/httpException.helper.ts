import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(flag: string, message?: any) {
    super(
      {
        statusCode: HttpStatus.FORBIDDEN,
        errors: {
          flag: flag,
          message: message,
        },
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
